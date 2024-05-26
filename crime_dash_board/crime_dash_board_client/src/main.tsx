import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageError from './web_clinet/globals/PageError.tsx'
import Crime_Branch from './web_clinet/render/Crime_Branch.tsx'
import { RecoilRoot } from 'recoil'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Crime_Branch />,
    errorElement: <PageError />,
  },
  {
    path: '/branch',
    element: <Crime_Branch />,
    errorElement: <PageError />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
