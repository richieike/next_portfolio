import React from 'react'
import styles from '../../../styles/Button.module.css'
import music_off from '../../../public/imgs/music_off.png'
import music_on from '../../../public/imgs/music_on.png'

function Button({ play, isPlaying }) {
  return (
    <div>
      <div  onClick={play} >
            { isPlaying?  <img className = {styles.musicbtnPressed} src = {music_on}/> :  <img  className={styles.btnContainer} src = {music_off}/>}
      </div>
    </div>
  )
}
export default Button
