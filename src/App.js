import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import IframeWithDynamicContent from './components/IframeWithDynamicContent';
import Css from './areas/Css';





const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [

          {
            path: '/output',
            element: <IframeWithDynamicContent/>
          }
        
      ]
    },
   
    



  ]);
  return <RouterProvider router={router} /> 
}

export default App