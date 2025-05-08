
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navcard.module.scss';

const Navcard = ({ label, target }) => {
  return (
    <div className={styles.navcard}>
      <NavLink to={target} className={styles.navlink}>
        {label}
      </NavLink>
    </div>
  );
};

export default Navcard;


