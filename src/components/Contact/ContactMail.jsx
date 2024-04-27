import React, {useRef} from 'react'

import styles from "./ContactMail.module.css";
import { getImageUrl } from "../../utils";

import emailjs from '@emailjs/browser';


const ContactMail = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fthlaai', 'template_hw2u3s6', form.current, {
        publicKey: 'd3IDWzoK3Ap2Bgscc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleSubmit= (ek) => {

  };

  return (
    <div className={styles.contact} id='contactMail'>
       <div className={styles.contactTitle}>
         <h1>Get in touch</h1>
       </div>
       <div className={styles.section}>
          <div className={styles.contactLeft}>
            <h1>Let's talk</h1>
            <p>I'm currently available for take new projects, so feel free to send me a message about anything you want to work.</p>
             <div className={styles.contactDetails}>
                  <div className={styles.contactDetail}>
                    <img src={getImageUrl("contact/mail_icon.svg")} alt="email icon" /> <p>ahnafnahiun@gmail.com</p>
                  </div>
                  <div className={styles.contactDetail}>
                    <img src={getImageUrl("contact/call_icon.svg")} alt="call icon" /> <p>+880-1849617838</p>
                  </div>
                  <div className={styles.contactDetail}>
                      <img src={getImageUrl("contact/location_icon.svg")} alt="location icon" /> <p>Dhaka, Bangladesh</p>      
                  </div>    
             </div>
             </div>

            <form className={styles.contactRight} ref={form} onSubmit={sendEmail}>

              <label htmlFor="" className={styles.contactRlabel}>Your Name</label>
              <input type="text" placeholder='Enter your name' name='from_name' />
              
              <label htmlFor="" className={styles.contactRlabel}>Your Email</label>
              <input type="email" placeholder='Enter your email' name='from_email' />
              
              <label htmlFor="" className={styles.contactRlabel}>Write your message here</label>
              <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
              
              <button  type='submit' value='Send' className={styles.contactSubmit}>Send now</button>
            </form>


          </div>
       </div>
  )
}

export default ContactMail