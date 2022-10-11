
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Quizes from '../components/Quizes';
import Roots from '../components/Roots'
import Statistics from '../components/Statistics';

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
            {
              path:'/quizes',
              element:<Quizes></Quizes>
            },
            {
              path:'/statistics',
              element:<Statistics></Statistics>
            },
            {
              path:'/blog',
              element:<Blog></Blog>
            },
            {
              path:'/about',
              element:<About></About>
            }
            
          ]
        }
    
      ])
   


export default router;