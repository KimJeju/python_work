import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageError from './web_clinet/globals/PageError.tsx'
import CrimeBranch from './web_clinet/render/crime_branch/CrimeBranch.tsx'
import { RecoilRoot } from 'recoil'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CrimeBranch />,
    errorElement: <PageError />,
  },
  {
    path: '/branch',
    element: <CrimeBranch />,
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
