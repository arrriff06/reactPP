import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './Card.jsx';
import App from './App.jsx';
import Products from './Products.jsx';
//import ReusableTable from './ReusableTable.jsx';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './Button.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products />
  </StrictMode>
);
