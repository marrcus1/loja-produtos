// app/page.tsx
"use client";

import React from 'react';
import ProductList from '../components/ProductList';
import QueryClientProviderWrapper from '../components/QueryClientProviderWrapper';

const HomePage: React.FC = () => {
  return (
    <QueryClientProviderWrapper>
      <h1>Bem-vindo à Loja de Produtos</h1>
      <ProductList />
    </QueryClientProviderWrapper>
  );
};

export default HomePage;
