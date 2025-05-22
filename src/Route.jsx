
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
{/* Explanation of the route : 
  createBrowserRouter : creates a router based on the browser's hitsory (like in a Single page application)
  RouterProvider : makes the router available throughout the application
  Outlet : dynamically renders the child components of a route 
  */}

import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Navbar from './Components/Header/navbar/Nav';

{/* Layout component: Displays the navigation bar (Navbar) 
  then, using <Outlet />, it dynamically renders the page corresponding to the route 
  it is a common layout for all child pages 
  */}
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

{/* Defines a set of routes
  The root (/) displays the layout component
  then, depending on the path (/, /about, etc), the corresponding components is displayed in the Outlet of the Layout
  this allows sharing the same structure (Navbar) while displaying different pages based to the route   
  */}
const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/hello', element : <Home /> },
      { path: '/about', element: <About /> },
      { path: '/project', element: <Project /> },
      { path: '/contact', element: <Contact /> },
    ]
  }
]);

{/*
  Main Component: AppRoutes, This component encapsulates the entire navigation system
  it makes the router available to the entire application through RouterProvider
   */}
export default function AppRoutes() {

  return <RouterProvider router={router} />;

}


{/* Summary 
  code steps up a clean navigation architecture in a React application, with: 
  - A reusable Layout (Navbar + Outlet),
  - Routes defined using creatBrowserRouter,
  - And dynamic page rendering through the Outlet component
  
  */}