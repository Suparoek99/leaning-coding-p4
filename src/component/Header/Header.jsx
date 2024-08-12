import React from 'react'
import styles from './Header.module.css'

function Header() {
    const imageArchitects ='https://www.w3schools.com/w3images/architect.jpg'

  return (
    <header>
        <img src={imageArchitects} alt="Architects" />

        <div className={styles.architects}>
          <h3>B R</h3>
          <h6>A r c h i t e c t s</h6>
        </div>
    </header>
  )
}

export default Header
