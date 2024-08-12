import React from 'react'
import styles from './content.module.css'
import { Fade } from 'react-awesome-reveal'

function Content() {
   
    const imageAll = [
        'https://www.w3schools.com/w3images/house5.jpg',
        'https://www.w3schools.com/w3images/house2.jpg',
        'https://www.w3schools.com/w3images/house3.jpg',
        'https://www.w3schools.com/w3images/house4.jpg',
        'https://www.w3schools.com/w3images/house2.jpg',
        'https://www.w3schools.com/w3images/house5.jpg',
        'https://www.w3schools.com/w3images/house4.jpg',
        'https://www.w3schools.com/w3images/house3.jpg',
        
    ]


  return (
    <div>
        <div className={styles.project}>
        <h3>Project</h3>
        </div>

        
        <div className={styles.container}>
          <Fade direction='up' duration={500}> 
            <div className={styles.items}>
            <img src={imageAll[0]} alt="Summer House" />
            <p>Summer House</p>
            </div>
            <div className={styles.items}>
            <img src={imageAll[1]} alt="Summer House" />
            <p>Brick House</p>
            </div>
            <div className={styles.items}>
            <img src={imageAll[2]} alt="Summer House" />
            <p>Renovated</p>
            </div>
            <div className={styles.items}>
            <img src={imageAll[3]} alt="Summer House" />
            <p>Barn House</p>
            </div>
            <div className={styles.items}>
            <img src={imageAll[4]} alt="Summer House" />
            <p>Summer House</p>
            </div>
            <div className={styles.items}>
            <img src={imageAll[5]} alt="Summer House" />
            <p>Brick House</p>
            </div>
            <div className={styles.items}>
            <img src={imageAll[6]} alt="Summer House" />
            <p>Renovated</p>
            </div>
            <div className={styles.items}>
            <img src={imageAll[7]} alt="Summer House" />
            <p>Barn House</p>
            </div>

            </Fade> 



        </div>
    

    </div>


  
  )
}

export default Content
