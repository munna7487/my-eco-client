import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomeRoot from '../Root/HomeRoot';
import Errorpage from '../error/Errorpage';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Privateroute from '../component/Privateroute';
import Reset from '../pages/Reset';
import Allmodels from '../pages/Allmodels';
import Modelcard from '../pages/Modelcard'; // যদি page হিসেবে থাকে
import ADD from '../pages/ADD';
import Details from '../pages/Details';
import Update from '../pages/Update';
import Active from '../pages/Active';
import Home from '../pages/Home';
import RecentTips from '../pages/RecentTips';
import Upcomeingevent from '../pages/Upcomeingevent';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
        element: <Privateroute><ADD /></Privateroute>,
      },
      {
        path: '/active',
        element: <Active />,
        loader: () => fetch('https://eco-client-server.vercel.app/latest')
      },
      {
        path: '/update/:id',
        element: <Privateroute><Update /></Privateroute>,
        loader: ({ params }) => fetch(`https://eco-client-server.vercel.app/challange/${params.id}`)
      },
      {
        path: '/allmodels',
        element: <Allmodels />,
        loader: () => fetch('https://eco-client-server.vercel.app/challange')
      },
      {
        path: '/allmodels/:id',
        element: <Privateroute>
          <Details />
        </Privateroute>,

      },
      {
        path: '/recent',
        element: <RecentTips></RecentTips>,

      },
       {
        path: '/upcomeingevent',
        element: <Upcomeingevent></Upcomeingevent>,

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