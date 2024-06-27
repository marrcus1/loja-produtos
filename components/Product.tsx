// components/Product.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useCartStore from '../store/cartStore';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, image }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 });
  };

  return (
    <ProductCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={image} alt={name} />
      <Details>
        <Name>{name}</Name>
        <Price>${price.toFixed(2)}</Price>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Details>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;

const Name = styled.h2`
  font-size: 1.2em;
  margin: 0;
`;

const Price = styled.p`
  font-size: 1em;
  color: #888;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-top: 8px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;
