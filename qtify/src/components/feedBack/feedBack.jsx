import styles from "./feedBack.module.css"
const FeedBack = () => {  
  return (
    <div className={styles.main}>
        <h3 className={styles.header}>Feedback</h3>
     <input placeholder="Full name" className={styles.field}/>
     <input placeholder="Email ID" className={styles.field} />
     <input placeholder="Subject" className={styles.field} />
     <input placeholder="Description"  className={styles.description}/>
     <button onClick={()=>{window.location.reload()}} className={styles.button}>submit Feedback</button>
    </div>
  )
}

export default FeedBack