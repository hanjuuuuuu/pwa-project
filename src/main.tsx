import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart.tsx'
import ProductList from './components/ProductList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cart" element={<Cart />} />
        <Route path="productlist" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
