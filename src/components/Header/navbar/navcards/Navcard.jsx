import React from 'react';


import { Link } from 'react-router-dom';

import styles from './Navcard.module.scss';


export default function Navcard({label, target}) {
  return (

   
    <div className={styles.container}>
      
      <Link className={styles.Link} to={target} data-label={label}>{label}</Link>
    </div>
  )
}


