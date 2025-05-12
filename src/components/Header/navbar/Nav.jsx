import React from 'react';
import Navcard from './navcards/Navcard';
import styles from './Nav.module.scss';

//Declaration of the variables leftItem, centerItems, and rightItems

{/*leftItem: : An object representing a single element in the left navigation bar.
  It contains two prpreties :
    lable: the text to display on the link, here 'micheal-weaver'.
    target: the destination URL of the link, here "/" 
*/}
const leftItem = { label: 'micheal-weaver', target: '/' };

{/* centerItems and rightItems: these are arrays containing objects definie multiple 
  elements in the navigation bar to be centered or right-aligned. 
  Each object has the same properties (label and target) to define the link text and decoration respectively 
  */}
const centerItems = [
  { label: '_hello', target: '/' },
  { label: '_about-me', target: '/about' },
  { label: '_projects', target: '/project' },
];

const rightItems = [
  { label: '_contact-me', target: '/contact' },
];

{/* the Navbar function is likely a child component used to display each link in the navigation bar*/}
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* The Navcard component i sused to display each navigation item. It takes two properties 
            - label: the text to display on the link, such as  'micheal-weaver', '_hello', etc.
            - target: the destination URL of the link, such as '/', 'about' etc. 
        */}
        <Navcard label={leftItem.label} target={leftItem.target} />
      </div>

      <div className={styles.center}>
        {/* map() is used to iterate through the centerItems and rightItems arrays and create a Navcard for each item.
            key={index}: the key proprety is required by React to optimize the rendering of lists of elements.
            It allows React to track each item uniquely during updates 
        */}
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



{/* Conclusion : 
  - The navigation bar is made up of three sections 
  - Each navigation item is rendered using the Navcard component, which takes the label and 
    target propreties to display the text and redirect the user to a given URL"
  - This Components is flexible and allows for easy adjustement of the navigation items by modifying the objects in leftItem, centerItems, and rightItems
  */}


