import React from 'react'
import styles from "./Footer.module.css";

function Footer() {
  return (
 
    <div className={styles.container}>
        <div className={styles.content}>
           <div className={styles.reserved}>
               <span>&copy; 2023 </span>
               <span>Ahnaf Hasnain Nahiun</span>|| 
               <span>All Rights Reserved</span>
            </div> 
        </div>

        {/* <div id={styles.box}>
           <div id={styles.in}>
               <h1>Hello</h1>
           </div>
        </div> */}
        
    </div>
  )
}

export default Footer