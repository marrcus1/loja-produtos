// components/ProductList.tsx
import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';
import SkeletonLoader from './SkeletonLoader';
import useCartStore from '../store/cartStore';

const fetchProducts = async () => {
  const res = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=4&rows=2&sortBy=price&orderBy=ASC');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);
  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) return <SkeletonLoader />;
  if (error) return <div>Failed to load products</div>;

  return (
    <div>
      {data.map((product: any) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
