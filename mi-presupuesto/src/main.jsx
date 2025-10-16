import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/ThemeProvider.jsx'
import MovementsProvider from './context/MovementsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MovementsProvider>
          <App />
        </MovementsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)