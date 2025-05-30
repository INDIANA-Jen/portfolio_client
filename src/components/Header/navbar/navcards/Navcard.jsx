
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navcard.module.scss';

{/* Declares a functional component called Navcard that takes two props : label (the text to display) and target  (the route to navigate to)  */}
const Navcard = ({ label, target }) => {
  
  const getLinkClassName = ({ isActive }) => {
    return isActive
      ? `${styles.navlink} ${styles.active}`
      : styles.navlink;
  };

  return (
    <div className={styles.navcard}>

      {/* to={target}: defines the target route*/}
      {/* className={styles.navlink: applies a locally scoped styled class */}
      {/* {label}: dynamically displays the link text */}
      
      <NavLink 
      to={target} 
      className={getLinkClassName}
      >
        {label}
        
      </NavLink>
    </div>
  );
};

export default Navcard;


