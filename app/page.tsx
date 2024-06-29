// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Bem-vindo à Loja de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
