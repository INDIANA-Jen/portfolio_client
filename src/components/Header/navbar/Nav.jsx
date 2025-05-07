/*import React from 'react';


import styles from './Nav.module.scss';
import Navcard from './navcards/Navcard';


const navItems = [
  {label : 'micheal-weaver', target: '/'},
  { label: '_hello', target: '/' },  
  { label: '_about-me', target: '/about' },  
  { label: '_projects', target: '/project' },  
  { label: '_contact-me', target: '/contact' },  
]

export default function Navbar() {
  return (

    
    <div className={styles.container}>

    
      {navItems.map((item, index) => (

       
        <Navcard key={index} label={item.label} target={item.target} />
        ))}
    </div>
  )
}
*/
// components/Navbar.jsx
import React from 'react';
import Navcard from './navcards/Navcard';
import styles from './Nav.module.scss';

const navItems = [
  { label: 'Accueil', target: '/' },
  { label: 'À propos', target: '/about' },
  { label: 'Projets', target: '/project' },
  { label: 'Contact', target: '/contact' },
];

export default function Navbar() {
  return (
    <div className={styles.container}>
      {navItems.map((item, index) => (
        <Navcard key={index} label={item.label} target={item.target} />
      ))}
    </div>
  );
}


