import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Sign_in from './pages/Sign_in';
import Bulk_order from './pages/Bulk_order';
import Signup from './pages/Sign_up';

import LoginButton from './pages/Sign_in';
import CallbackPage from './pages/Callback';
import LogoutButton from './pages/Sign_out';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouter = createBrowserRouter([

  {
    path: '/',
    element: <Home></Home>

  },
  {
    path: '/sign_in',
    element: <LoginButton></LoginButton>
  },
  {
    path: '/bulk_order',
    element: <Bulk_order></Bulk_order>
  },
  {
    path: '/sign_up',
    element: <Signup></Signup>
  },
  {
    path: '/login',
    element: <LoginButton></LoginButton>
  },
 {
  path:'/callback',
  element:<CallbackPage></CallbackPage>
 },
 {
  path:'log_out',
  element:<LogoutButton></LogoutButton>
 }
])


root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xufegyqmkqi8ezy1.us.auth0.com"
      clientId="X5X1FTFxCVSod1ISDBIrJPgFwdakBdZm"
      authorizationParams={{
        redirect_uri: "http://localhost:3000" // Ensure Auth0 redirects back to /callback
      }}
    >
      <RouterProvider router={allrouter}></RouterProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
