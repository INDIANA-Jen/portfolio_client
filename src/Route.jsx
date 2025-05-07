import React from 'react';
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
}