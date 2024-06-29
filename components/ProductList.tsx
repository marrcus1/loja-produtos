"use client"; 
// components/ProductList.tsx
import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/fetchProducts';
import ProductItem from './ProductItem';
import SkeletonLoader from './SkeletonLoader';
import useCartStore from '../store/cartStore';

const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useQuery('products', fetchProducts);
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) return <SkeletonLoader />;
  if (error) return <div>Failed to load products</div>;

  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.photo}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
