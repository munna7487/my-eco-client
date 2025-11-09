// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from './routes/Routes.jsx'
import { ToastContainer } from 'react-toastify'
import Authprovider from './Provider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
      <ToastContainer />
    </Authprovider>
  </StrictMode>
)