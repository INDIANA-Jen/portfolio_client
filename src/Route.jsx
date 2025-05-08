
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Navbar from './Components/Header/navbar/Nav';


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