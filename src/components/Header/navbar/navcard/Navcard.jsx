import React from 'react';
import { Link } from 'react-router-dom';

export default function Navcard({label, target}) {
  return (
    <div className='navcard'>
      <Link to={target}>{label}</Link>
    </div>
  )
}
