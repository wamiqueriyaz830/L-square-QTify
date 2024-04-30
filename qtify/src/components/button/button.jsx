import React, { useState } from 'react'
import styles from "./button.module.css";
import FeedBack from '../feedBack/feedBack';

const Button = ({text}) => {

  const [render,setRender] = useState(false)

  const handler = () => {
      setRender(true)
  }
  
  return (
    <button onClick={handler} className={styles.button} >{text}
    {render ? <FeedBack /> : null}
    </button>
  )
}

export default Button