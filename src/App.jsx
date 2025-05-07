import React from 'react'

//Import the Route component.
import Route from './Route'

//Import modular App styles.
import styles from './App.module.scss';

//Import modular Base styles 
import './styles/Base.module.scss'

export default function App() {
  return (
    <>
    <div className={styles.container}>
      <Route /> {/* Include the entire routing system in this. */}
    </div>
        
    </>
  )
}
