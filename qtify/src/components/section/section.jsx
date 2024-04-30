import React, { useState } from 'react'
import styles from "./section.module.css"
import { CircularProgress } from '@mui/material'
import Card from '../card/card'
import Carousel from '../carousel/carousel'
const Section = ({data,title,type}) => {
    const [carouselToggle,setCarouselToggle] = useState(true)
    
    const handleToggle = () => {
        setCarouselToggle(!carouselToggle)
    } 
     
    return (
    <div>
    <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className={styles.toggleText}>
            {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
    </div>
    {
        data.length === 0 ? (
            <CircularProgress />
        ):(
          <div className={styles.cardsWrapper}>
            {!carouselToggle ? (<div className={styles.wrapper}>
              {data.map((ele)=>(
               <Card data={ele} type={type} key={ele.id}/>
              ))}  
            </div>) : (<Carousel data={data} renderComponent={(data)=> <Card data={data} type={type}/>}/>)}</div>
        )
    }
    </div>
  )
}

export default Section