import React from 'react'
import styles from './About.module.css'

function About() {

  const imgeitem = ['https://www.w3schools.com/w3images/team2.jpg',
                   'https://www.w3schools.com/w3images/team1.jpg',
                   'https://www.w3schools.com/w3images/team3.jpg',
                   'https://www.w3schools.com/w3images/team4.jpg'
    
  ]

  return (
    <div>
        
          <div className={styles.about}>
          <h3>About</h3>
          </div>

        <div className={styles.info}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum quo sapiente laudantium odit ut libero molestias quaerat ipsam vero similique quam fugit adipisci, tempore dolorum velit impedit. Doloribus id accusantium obcaecati officiis atque tempore veniam dolorem maxime aut autem, nulla eligendi beatae! Non asperiores aspernatur modi! Quod porro qui soluta debitis, mollitia, voluptates modi voluptatibus inventore beatae eligendi dolores error commodi corrupti nam enim quam animi dolorum. Voluptatum odio nemo dolore dignissimos ipsa, officia alias voluptatibus culpa distinctio consequatur magnam illum dicta quia, expedita officiis numquam repudiandae suscipit eum libero laboriosam. Esse harum quis veritatis, eligendi quidem dolore quasi.</p>
          </div>
          
        <div className={styles.container}>
          <div className={styles.items}>
          <img src={imgeitem[0]} alt="" />
          <h3>John Doe</h3>
          <h4>CEO & Founder</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ratione perspiciatis corporis.</p>
          <a href="#">Contact</a>

          </div>

          <div className={styles.items}>
          <img src={imgeitem[1]} alt="" />
          <h3>Rena Jane</h3>
          <h4>Architect</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ratione perspiciatis corporis.</p>
          <a href="#">Contact</a>
          </div>

          <div className={styles.items}>
          <img src={imgeitem[2]} alt="" />
          <h3>Mile Ross</h3>
          <h4>Architect</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ratione perspiciatis corporis.</p>
          <a href="#">Contact</a>
          </div>

          <div className={styles.items}>
          <img src={imgeitem[3]} alt="" />
          <h3>Dan Star</h3>
          <h4>Architect</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ratione perspiciatis corporis.</p>
          <a href="#">Contact</a>
          </div>




        </div>





    </div>
  )
}

export default About
