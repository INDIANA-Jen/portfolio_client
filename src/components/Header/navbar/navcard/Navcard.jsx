import React from 'react';

//Importing the Link component from react-router-dom for navigation without page reload.
import { Link } from 'react-router-dom';

// Declaration of the Navcard component, which takes label and target as props. 
// label: the text that will be displayed in the link. 
// target: the URL of the route to which the link should redirect.

export default function Navcard({label, target}) {
  return (

    // A div container with the class 'contenair', used to style this component.
    <div className='contenair'>
      {/* The Link component allows navigation to the route specified by target. */}
      <Link to={target}>{label}</Link>
    </div>
  )
}


