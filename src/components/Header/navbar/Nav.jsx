import React from 'react';
import Navcard from './navcards/Navcard';
import styles from './Nav.module.scss';

{/* Definition of navigation items */}
{/* This is an array of objetcts representing the links in the navigation menu : 
    label : the text displayed on each link 
    target: the route each link redirects to
  */}
/*const navItems = [
  { label: 'micheal-weaver', target: '/' },
  { label: '_hello', target: '/' },
  { label: '_about-me', target: '/about' },
  { label: '_projects', target: '/project' },
  { label: '_contact-me', target: '/contact' },
];*/

const leftItem = [{ label: 'micheal-weaver', target: '/' }];

const centerItems = [
  { label: '_hello', target: '/' },
  { label: '_about-me', target: '/about' },
  { label: '_projects', target: '/project' },
];

const rightItems = [
  { label: '_contact-me', target: '/contact' },
];

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Navcard label={leftItem.label} target={leftItem.target} />
      </div>

      <div className={styles.center}>
        {centerItems.map((item, index) => (
          <Navcard key={index} label={item.label} target={item.target} />
        ))}
      </div>

      <div className={styles.right}>
        {rightItems.map((item, index) => (
          <Navcard key={index} label={item.label} target={item.target} />
        ))}
      </div>
    </div>
  );
}









//export default function Navbar() {

  {/* definition of navigation items: 
    It loops through each element in navItemes using map(...) 
    for eact item, it renders a Navcard components, passing:
          label : the text displayed on each link or the link text
          target : the route each link redirects to or the link destination
    
    the key helps React keep track of each element during  dynamic rendering (here index is used, but an id )
     */}
 /* return (
    <div className={styles.container}>
      {navItems.map((item, index) => (
        <Navcard key={index} label={item.label} target={item.target} />
      ))}
    </div>
  );
}*/


