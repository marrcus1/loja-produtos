// app/page.tsx
import React from 'react';
import ProductList from '@/components/ProductList';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo à Loja de Produtos</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
