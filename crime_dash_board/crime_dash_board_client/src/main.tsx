import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageError from './web_clinet/Globals/PageError.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App />,
    errorElement : <PageError />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
