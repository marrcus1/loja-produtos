// components/__tests__/Cart.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../Cart';
import useCartStore from '../../store/cartStore';

jest.mock('../../store/cartStore');

test('renders cart items', () => {
  useCartStore.mockReturnValue({
    cart: [{ id: '1', name: 'Test Product', price: 10, quantity: 2 }],
    updateQuantity: jest.fn(),
  });
  render(<Cart />);
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$20.00')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('updates product quantity', () => {
  const updateQuantity = jest.fn();
  useCartStore.mockReturnValue({
    cart: [{ id: '1', name: 'Test Product', price: 10, quantity: 2 }],
    updateQuantity,
  });
  render(<Cart />);
  fireEvent.click(screen.getByText('+'));
  expect(updateQuantity).toHaveBeenCalledWith('1', 3);
});