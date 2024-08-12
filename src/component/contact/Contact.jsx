import React from 'react'
import styles from './Contact.module.css'


function Contact() {

    const map ='https://www.w3schools.com/w3images/map.jpg'

  return (
    <div>

      <div className={styles.contact}>
        <h2>Contact</h2>
      </div>

        <div className={styles.containercontact}>
            <p>Lets get in tout and talk about your next project</p>
        
        
            <form>
                <label for="name"></label>
                <input type="text" name='name' placeholder='Name' required/>
                <br></br>
                
                
                <label for="email"></label>
                <input type="email" name='email' placeholder='Email' required/>
                <br></br>
                
                <label for="subject"></label>
                <input type="text" name='subject' placeholder='Subject' required/>
                <br></br>
                
                <label for="comment"></label>
                <input type="text" name='comment' placeholder='Comment' required/>
                <br></br>
                
                </form>
        <div className={styles.button}>
        <button type="submit">SEND MESSAGE</button>
        </div>
        
        <div className={styles.map}>
            <img src={map} alt="map" />
        </div>
        
        
        
        </div>






    </div>
  )
}

export default Contact
