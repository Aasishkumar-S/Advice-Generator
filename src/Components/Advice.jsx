import React, { useState } from 'react'
import styles from './advice.module.css'
const Advice = () => {
    let [adv,setAd] = useState("Start")
    async function ref(){
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        setAd(data.slip.advice)
      
    }   
  



  return (

    <div className={styles.container}>
      
      <div className={styles.content}>
        
          <div>
              <h1 className={styles.title}>Need Some Advice?</h1>
          </div>
          
          {/* <h1 className={styles.title} style={{ "--steps": 15 }}>
      Get Instant Advice
    </h1> */}

        
        
        <button onClick={ref} className={styles.btn}>Click</button>
        <p className={styles.message}>{adv}</p>
      </div>
      
    </div>
  )
}

export default Advice
