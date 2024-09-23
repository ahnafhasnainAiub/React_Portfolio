import React, {useRef, useState} from 'react'

import styles from "./ContactMail.module.css";
import { getImageUrl } from "../../utils";

import emailjs from '@emailjs/browser';


const ContactMail = () => {
  
  const form = useRef();

    // State to manage form inputs
    const [formData, setFormData] = useState({
      from_name: '',
      from_email: '',
      message: ''
    });


    const [successMessage, setSuccessMessage] = useState(null); // State for success message

    // Handle form input changes
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fthlaai', 'template_hw2u3s6', form.current, {
        publicKey: 'd3IDWzoK3Ap2Bgscc',
      })
      .then(
        () => {
           
          console.log('SUCCESS!');
          setSuccessMessage("Your Email Sent Successfully!");

          // Clear the form after successful submission
          setFormData({
            from_name: '',
            from_email: '',
            message: ''
          });

        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage("Failed to send email. Please try again.");
        },
      );
  };

  const handleSubmit= (ek) => {

  };

  return (
    <div className={styles.contact} id="contactMail">
      <div className={styles.contactTitle}>
        <h1>Get in touch</h1>
      </div>
      <div className={styles.section}>
        <div className={styles.contactLeft}>
          <h1>Let's talk</h1>
          <p>
            I'm currently available for take new projects, so feel free to send
            me a message about anything you want to work.
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactDetail}>
              <img
                src={getImageUrl("contact/mail_icon.svg")}
                alt="email icon"
              />{" "}
              <p>ahnafnahiun@gmail.com</p>
            </div>
            <div className={styles.contactDetail}>
              <img src={getImageUrl("contact/call_icon.svg")} alt="call icon" />{" "}
              <p>+880-1849617838</p>
            </div>
            <div className={styles.contactDetail}>
              <img
                src={getImageUrl("contact/location_icon.svg")}
                alt="location icon"
              />{" "}
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className={styles.socio}>
             <div>
               <a href="https://www.linkedin.com/in/ahnafhasnainnahiun/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/></a>
             </div>
             <div>
               <a href="https://github.com/ahnafhasnainAiub"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/></a>
             </div>
          </div>
        </div>

        <div className={styles.succmessage}>
          <form className={styles.contactRight} ref={form} onSubmit={sendEmail}>
            <label htmlFor="" className={styles.contactRlabel}>
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <label htmlFor="" className={styles.contactRlabel}>
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />

            <label htmlFor="" className={styles.contactRlabel}>
              Write your message here
            </label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" value="Send" className={styles.contactSubmit}>
              Send now
            </button>
          </form>

          <div>
            {/* Success message */}
            {successMessage && (
              <p className={styles.successMessage}>{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMail