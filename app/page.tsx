// app/page.tsx
"use client";

import React from 'react';
import ProductList from '../components/ProductList';
import QueryClientProviderWrapper from '../components/QueryClientProviderWrapper';

const HomePage: React.FC = () => {
  return (
    <QueryClientProviderWrapper>
      <ProductList />
    </QueryClientProviderWrapper>
  );
};

export default HomePage;