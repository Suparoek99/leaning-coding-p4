import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
   <nav>
        <div className={styles.container}>
            <div className={styles.left}>
            <a href="#"><b>BR</b> Architects</a>
            </div>

            <div className={styles.right}>
              <a href="#">Projects</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
        </div>



   </nav>
  )
}

export default Navbar
