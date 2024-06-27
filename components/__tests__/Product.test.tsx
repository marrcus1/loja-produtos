// components/__tests__/Product.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from '../Product';

test('renders Product component', () => {
  render(<Product id="1" name="Test Product" price={10} image="/test.jpg" />);
  const productName = screen.getByText('Test Product');
  expect(productName).toBeInTheDocument();
});
