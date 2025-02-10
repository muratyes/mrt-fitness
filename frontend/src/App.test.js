// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router'ı buraya dahil edin

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
