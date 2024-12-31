import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Sign_in from './pages/Sign_in';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouter=createBrowserRouter([

  {
    path:'/',
    element:<Home></Home>

  },
  {
    path:'/sign_in',
    element:<Sign_in></Sign_in>
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={allrouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
