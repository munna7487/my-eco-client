import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeRoot from '../Root/HomeRoot';
import Errorpage from '../error/Errorpage';
import MyBanner from '../pages/MyBanner';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Privateroute from '../component/Privateroute';



export  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            index:true,
            Component:MyBanner,
        },
         {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
            path:'/footer',
            element:<Privateroute>
                <footer></footer>
            </Privateroute>
        }
    ]
  },
]);