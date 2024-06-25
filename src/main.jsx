import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import ShopPage from './Components/ShopPage.jsx';
import Homepage from './Components/Homepage.jsx';
import ErrorPage from './Components/ErrorPage.jsx';

const router = createBrowserRouter([
    { 
        path: "/",
        element: <Homepage />,
    },
    { 
        path: "/homepage",
        element: <Homepage />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
    {
        path: "/errorpage",
        element: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
