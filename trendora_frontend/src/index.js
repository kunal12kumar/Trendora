import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Sign_in from './pages/Sign_in';
import Bulk_order from './pages/Bulk_order';
import Signup from './pages/Sign_up';

import LoginButton from './pages/Sign_in';
import CallbackPage from './pages/Callback';
import LogoutButton from './pages/Sign_out';
import UserProfile from './pages/Profile';
import Shippingpolicies from './pages/ShippingPolicies';
import Refundpoliciy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CartPage from './pages/CartPage';
import ProductUploadForm from './pages/UploadProductList';

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
    path: '/log_in',
    element: <Sign_in></Sign_in>
  },
  {
    path: '/callback',
    element: <CallbackPage></CallbackPage>
  },
  {
    path: 'log_out',
    element: <LogoutButton></LogoutButton>
  },{
    path:'/profile',
    element:<UserProfile></UserProfile>
  },{
    path:'/shippingpolicy',
    element:<Shippingpolicies></Shippingpolicies>
  },
  {
    path:'/refundpolicy',
    element:<Refundpoliciy></Refundpoliciy>
  },

  {
    path: '/privacypolicy',
    element:<PrivacyPolicy></PrivacyPolicy>
  },

  {
    path:'/aboutus',
    element:<AboutUs></AboutUs>
  },
  {
    path:'/contactus',
    element:<ContactUs></ContactUs>
  },
  {
    path:'/cart',
    element:<CartPage></CartPage>

  },
  {
    path:'/productuploadform',
    element:<ProductUploadForm></ProductUploadForm>
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
