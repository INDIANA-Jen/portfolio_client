import React from 'react';
import Navcard from './navcard/Navcard';
//import './Navcard.module.scss';

const navItems = [
  { label: '_hello', target: '/' },  // Lien vers la page hello
  { label: '_about-me', target: '/about' },  // Lien vers la page about
  { label: '_projects', target: '/project' },  // Lien vers la page projects
  { label: '_contact-me', target: '/contact' },  // Lien vers la page contact
]

export default function Navbar() {
  return (
    <div className='Container'>
      {navItems.map((item, index) => (
        <Navcard key={index} label={item.label} target={item.target} />
        ))}
    </div>
  )
}

//to verify and validate