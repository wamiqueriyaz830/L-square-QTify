import React from 'react'
import HeroImage from '../../assests/vibrating-headphone 1.png'
import styles from './hero.module.css'
const Hero = () => {
  return (
    <>  
        <section className={styles.wrapper}>
            <div className={styles.headingBody}>
                <h1 className={styles.head}>100 Thousand Songs, ad-free</h1>
                <h1 className={styles.head}>Over thousands podcast episodes</h1>
                <div  className={styles.line}> </div>
              
                <div  className={styles.line2}> </div>
            </div>
                <img className={styles.headphone} src={HeroImage} alt='headphone'/>
        </section>
    </>
  )
}

export default Hero