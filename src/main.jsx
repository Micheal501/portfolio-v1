import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeroSection from './components/organisms/Hero';
import AboutSection from './components/organisms/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './components/organisms/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroSection />,
  },
  {
    path: '/about',
    element: <AboutSection />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
