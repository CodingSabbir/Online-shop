import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import SingleProduct from './pages/home/singleProduct.jsx';
import CreateAccount from './components/CreateAccount.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
          {
            path: "/",
          element: <Home/>,
          },
          {
            path: "/shop/:id",
          element: <SingleProduct/>,
          },
          {
            path: "/signin",
          element: <CreateAccount/>,
          }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
