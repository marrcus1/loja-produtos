// components/ProductItem.tsx
import React from 'react';
import { ProductProps } from '../types';

const ProductItem: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <div>
      <img src={product.photo} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductItem;
