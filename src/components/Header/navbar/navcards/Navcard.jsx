/*import React from 'react';


import { Link } from 'react-router-dom';

import styles from './Navcard.module.scss';


export default function Navcard({label, target}) {
  return (

    <div className={styles.container}>
      
      <Link className={styles.Link} to={target} data-label={label}>{label}</Link>
    </div>
  )
}*/

// components/navcards/Navcard.jsx
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


