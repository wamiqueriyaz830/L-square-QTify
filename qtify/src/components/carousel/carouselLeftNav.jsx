import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as LeftArrow} from '../../assests/leftArrow.svg'
import styles from './carousel.module.css'

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className={styles.leftNav}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation