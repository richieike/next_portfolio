import React from 'react'
import keyboard from '../public/imgs/keyboard.png'
import styles from '../styles/Keyboard.module.css'

const Keyboard = () => {
    return (
        <div className = {styles.keyboardContainer}>
             <img src={keyboard} loading = "lazy" alt="keyboard" width="1000" height="1000"></img>
        </div>
    )
}

export default Keyboard
