import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Group from './pages/Together.jsx'
import Profile from './pages/User.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: '/together',
        element: <Together />
      },
      {
        path: '/user',
        element: <User />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
