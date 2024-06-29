// components/ProductList.tsx
"use client"; 
// components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Product } from '../types';
import ProductItem from './ProductItem';
import useCartStore from '../store/cartStore'; // Ajuste para importar seu Zustand store

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
