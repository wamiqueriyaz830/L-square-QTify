import {ReactComponent as MusicPlayerPic} from "../../assests/musicPlayerPic.svg"
import {ReactComponent as PlayButton} from "../../assests/playButton.svg"
import {ReactComponent as PlayBar} from "../../assests/playerBar.svg"
import styles from  "./musicPlayer.module.css"
import {ReactComponent as PauseButton} from "../../assests/pauseButton.svg"
import Paisa from "../../assests/paisaHindi.mp3.mp3"

const MusicPlayer = () => {

  let audio = new Audio(Paisa)

  const start = () => {
    audio.play()
  }

  const pause = () => {
    audio.pause()
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.albumpic}><MusicPlayerPic /></div>
        <div>
        <div className={styles.playbutton}>
          <button className={styles.buttonBG} onClick={start}><PlayButton /></button>
          <button className={styles.buttonBG} onClick={pause}><PauseButton className={styles.pauseButton}/></button>
          </div>
        <div className={styles.playbar}><p className={styles.min}>0:38</p><PlayBar /><p className={styles.min}>3:38</p></div>
        </div>
    </div>
  )
}

export default MusicPlayer