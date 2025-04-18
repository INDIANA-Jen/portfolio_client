import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/home/Home';
import About from './pages/About/About';
import Project from './Pages/project/Project';
import Contact from './Pages/contact/Contact';



export default function Routepage() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
    );
}
