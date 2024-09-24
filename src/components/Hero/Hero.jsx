import React from 'react';
import Typed from 'typed.js';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';


function Hero() {

   const el = React.useRef(null);
   
   React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Full-Stack Developer", "Backend Developer", "Fronted Developer"],
        typeSpeed: 100,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);


  return (
 <section className={styles.container}>
      <div className={styles.content}>
         <h2 className={styles.title}>Hello, I am Ahnaf</h2>
         <h3 className={styles.title3}>I'm a <span className={styles.title4} ref={el}></span></h3>
         <p className={styles.description}>With hands-on experience in ReactJs, Nodejs, ExpressJs and NextJs. Feel free to reach out if you'd like to learn more!</p>
        <div className={styles.btns}>
          <a  href="#contactMail" className={styles.contactBtn}>Hire Me</a>
          <a href='Resume.pdf' download='Ahnaf Hasnain Resume.pdf' className={styles.contactBtn}>Resume</a>
        </div>
        
     </div>
     <img src={getImageUrl("hero/heroImg.jpg")} alt="Hero Image" className={styles.heroImg} />
     <div className={styles.topBlur}></div>
     <div className={styles.bottomBlur}></div>
  </section>

 );
};

export default Hero