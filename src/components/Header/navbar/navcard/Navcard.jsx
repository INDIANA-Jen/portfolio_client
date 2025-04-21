import React from 'react';
import { Link } from 'react-scroll';

export default function Navcard({label, target}) {
  return (
    <div className='navcard'>
      <Link href= {target}>
        {label}
      </Link>
    </div>
  )
}
