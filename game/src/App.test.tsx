import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import mockUser from './mock/User.json'

const  { getByTestId } = screen;

test('renders learn react link', () => {
  render(<App userData={mockUser} />);
  expect(getByTestId('main-app')).toBeInTheDocument()
});
