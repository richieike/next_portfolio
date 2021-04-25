import React from 'react'
import Meta from '../components/Meta'
import styles from '../styles/Aboutme.module.css'
import ProfilePic from '../public/imgs/ProfilePic.jpg'
import { useRouter } from 'next/router'
const me = () => {

    return (
        <div className = {styles.container} >
     
            <Meta title = 'About Me'  />
            <img className = {styles.imageContainer} src = {ProfilePic} alt = "ProfilePic" width = {200} height = {200}/>
            <div className = {styles.textContainer}>
            <p>After many years working with top companies on top brands it is safe to say i have a passion for developing applications.</p>
            <p>Freelancing has allowed me to have time to write my own book.</p> 
            <p>It covers the principles of Javascript - its evolution- function examples and explanation - ReactJS (and its popularity) & Node.js. The book also covers Design Patters, CSS (SASS vs Styled Components)</p>
            </div>
            
            <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family:LazenbyComp;
  }

  * {
    box-sizing: border-box;
  }
`}</style>     
    
        </div>
    )
}

export default me
