
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Quizes from '../components/Quizes';
import Roots from '../components/Roots'
import Statistics from '../components/Statistics';
import { quizAndData } from '../loaders/getQuizData';

    const router = createBrowserRouter([
        {
          path:'/',
          errorElement:<ErrorPage></ErrorPage>,
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
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
              path:'/quizes/:id',
              element:<Quizes></Quizes>,
              loader: quizAndData
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