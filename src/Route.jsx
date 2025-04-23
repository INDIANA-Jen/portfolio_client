import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
{
    /*
        We import elements from the react-router-dom module, which is used to manage navigation:
            BrowserRouter (renamed here as Router): the main component that enables routing via the URL.
            Routes: a container that wraps all possible routes.
            Route: defines a specific path and the component to display when that path is visited.
     */
}

//We import the pages to be displayed based on the visited route.
import Home from './Pages/home/Home';
import About from './pages/About/About';
import Project from './Pages/project/Project';
import Contact from './Pages/contact/Contact';

//We import the navigation bar component, which is displayed on every page.
import Navbar from './Components/header/navbar/Navbar';


//We declare and export a functional component named **Routepage**.
export default function Routepage() {
    return (
        <Router>
            <Navbar /> {/* The navigation bar is always displayed, no matter which page is visited.*/}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
    );
}

//to verify and validate
