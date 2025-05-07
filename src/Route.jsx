import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/home/Home';
import About from './pages/About/About';

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> }
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}