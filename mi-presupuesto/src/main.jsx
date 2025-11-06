import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';
import { BudgetProvider } from './context/BudgetContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BudgetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BudgetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
