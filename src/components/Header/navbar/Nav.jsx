import React from 'react';

//Importing the Navcard component we saw earlier, which represents a link with a label and a destination.
//import Navcard from './navcard/Navcard';
import styles from './Nav.module.scss';
import Navcard from './navcards/Navcard';

// An array that contains the navigation items as objects. 
// Each object has a label property for the link text and a target property for the route to which the link should redirect.
const navItems = [
  {label : 'micheal-weaver', target: '/'},
  { label: '_hello', target: '/' },  
  { label: '_about-me', target: '/about' },  
  { label: '_projects', target: '/project' },  
  { label: '_contact-me', target: '/contact' },  
]

export default function Navbar() {
  return (

    // Main container for the navigation bar.
    // Here, we use a div with the class 'Container' to wrap all the navigation elements.
    <div className={styles.container}>

      {/* The map() method is used to iterate over each element of the navItems array */}
      {navItems.map((item, index) => (

        // For each item in the array, we display a Navcard component with the label and target props coming from the current item in the array.
        // Each Navcard also has a key to ensure proper management of components in the DOM by React.
        <Navcard key={index} label={item.label} target={item.target} />
        ))}
    </div>
  )
}

