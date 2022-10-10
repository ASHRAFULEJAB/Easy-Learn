
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Roots from '../components/Roots'

    const router = createBrowserRouter([
        {
          path:'/',
          element:<Roots></Roots>,
          children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/home',
              element:<Home></Home>
            },
            
          ]
        }
    
      ])
   


export default router;