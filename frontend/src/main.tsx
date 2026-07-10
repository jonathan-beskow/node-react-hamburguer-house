import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Header } from './components/header/Header'
import './index.css'
import Login from './components/login/login'
import Register from './components/register/register'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Header /> */}
    {/* <App /> */}
    {/* <Login /> */}
    <Register />
  </StrictMode>,
)
