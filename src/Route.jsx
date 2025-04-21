import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/home/Home';
import About from './pages/About/About';
import Project from './Pages/project/Project';
import Contact from './Pages/contact/Contact';

import Navbar from './Components/header/navbar/Navbar';


export default function Routepage() {
    return (
        <Router>
            <Navbar />
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
