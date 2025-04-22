import React from 'react'
import Route from './Route'

import styles from './App.module.scss';

export default function App() {
  return (
    <>
    <div className={styles.container}>
      <Route/>
    </div>
        
    </>
  )
}


/*import React from 'react'
import Home from "./pages/Home/Home";
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Project from './pages/Project/Project';

export default function App() {
  return (
    <>
      <div>

        <header>
          <Home/>
        </header>

        <main>
          <About/>
          <Project/>
        </main>

        <footer>
          <Contact/>
        </footer>

      </div>

    </>
  )
}*/
