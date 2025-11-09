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
import ADD from '../pages/ADD';
import Details from '../pages/Details';
import Update from '../pages/Update';

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
        path: '/add',
        element: <ADD />,
      },
       {
        path: '/update/:id',
        element: <Update/>,
        loader:({params})=>fetch(`http://localhost:3000/challange/${params.id}`)
      },
      {
        path: '/allmodels',
        element: <Allmodels />,
        loader: () => fetch('http://localhost:3000/challange') // CORS এখন ঠিক আছে
      },
      {
        path: '/allmodels/:id',
        element: <Details />,
        loader:({params})=>fetch(`http://localhost:3000/challange/${params.id}`)
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