import React from 'react';

export default function Navcard({label, target}) {
  return (
    <div className='navcard'>
      <a href= {target}>
        {label}
      </a>
    </div>
  )
}
