import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import ShopPage from './Components/ShopPage.jsx';
import Homepage from './Components/Homepage.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Cart from './Components/Cart.jsx';

const router = createBrowserRouter([
    { 
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    { 
        path: "/homepage",
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
