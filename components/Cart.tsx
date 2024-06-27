// components/Cart.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useCartStore from '../store/cartStore';

const Cart: React.FC = () => {
  const { cart, updateQuantity } = useCartStore((state) => ({
    cart: state.cart,
    updateQuantity: state.updateQuantity,
  }));

  return (
    <CartContainer
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
          </ItemDetails>
          <ItemQuantity>
            <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
            <Quantity>{item.quantity}</Quantity>
            <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
          </ItemQuantity>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled(motion.div)`
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.p`
  font-size: 1em;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 1em;
  color: #888;
  margin: 0;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 4px;

  &:hover {
    background-color: #005bb5;
  }
`;

const Quantity = styled.span`
  font-size: 1em;
  margin: 0 8px;
`;
