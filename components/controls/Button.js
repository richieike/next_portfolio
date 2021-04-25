import React from 'react'
import styles from '../../styles/Button.module.css'
import power_green from '../../public/imgs/power_green.png'
import power_black from '../../public/imgs/power_black.png'

function Button({ play, isPlaying }) {
  return (
    <div>
      <div  onClick={play} >
            { isPlaying?  <img className = {styles.btnContainerPressed} src = {power_black}/> :  <img  className={styles.btnContainer} src = {power_green}/>}
      </div>
    </div>
  )
}
export default Button
