import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <Router basename='/'>
      <AppRoutes />
    </Router>
  );
}
