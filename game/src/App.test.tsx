import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const  { getByTestId } = screen;

test('renders learn react link', () => {
  render(<App />);
  expect(getByTestId('main-app')).toBeInTheDocument()
});
