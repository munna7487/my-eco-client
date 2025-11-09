import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomeRoot from '../Root/HomeRoot';
import Errorpage from '../error/Errorpage';
import MyBanner from '../pages/MyBanner';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Privateroute from '../component/Privateroute';
import Reset from '../pages/Reset';
import Allmodels from '../pages/Allmodels';
import Modelcard from '../pages/Modelcard'; // যদি page হিসেবে থাকে

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <MyBanner />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/reset',
        element: <Reset />,
      },
      {
        path: '/modelcard',
        element: <Modelcard />,
      },
      {
        path: '/allmodels',
        element: <Allmodels />,
        loader: () => fetch('http://localhost:3000/users') // CORS এখন ঠিক আছে
      },
      {
        path: '/footer',
        element: (
          <Privateroute>
            <footer>Private Footer</footer>
          </Privateroute>
        )
      }
    ]
  },
]);