// components/ProductList.tsx
"use client"; 
// components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.photo} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
