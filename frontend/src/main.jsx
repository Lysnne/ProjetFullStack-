import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PageHome from './pages/PageHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageHome />
  </StrictMode>,
)
