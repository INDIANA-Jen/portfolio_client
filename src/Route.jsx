/*import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';




const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> },
    { path: "/Project", element: <Project />},
    { path: "/Contact", element: <Contact />}
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}*/


import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Navbar from './components/Navbar'; // Import de la Navbar

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/project', element: <Project /> },
      { path: '/contact', element: <Contact /> },
    ]
  }
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}