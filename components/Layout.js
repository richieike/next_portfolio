import React, { useState, useRef } from 'react'

import Computerprint from '../public/sounds/Computerprint.mp3'
import Meta from './Meta'
import Nav from './Nav'
import styles from '../styles/Layout.module.css';
import Image from 'next/image'
import ControlPanel from '../components/controls/ControlPanel'
import useSound from 'use-sound'
import Rollover from '../public/sounds/Rollover.mp3'
import KeyboardTyping from '../public/sounds/KeyboardTyping.mp3'
import Header from './Header'
import Teacup from '../pages/Teacup.js'



const Layout = ({ children }) => {

    //Sound variables
    const [percentage, setPercentage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef();
    //Nav Menu
    const [rollover, { stop }] = useSound(
        Rollover,
        {
            interrupt: true,
            volume: 0.05
        }
    );
    //Typing animation
    const [keyboardTyping] = useSound(
        KeyboardTyping,
        {
            interrupt: true,
            volume: 0.01
        }
    );
    //music Variables
    const play = () => {
        const audio = audioRef.current;
        audio.volume = 0.1;

        if (!isPlaying) {
            setIsPlaying(true);
            audio.play();
        }

        if (isPlaying) {
            setIsPlaying(false);
            audio.pause();
        }
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }


    return (
        <>
            <Meta />
            <div id={styles.parent} >
                <Image
                    src="/imgs/Monitor.gif"
                    alt="Picture of the author"
                    priority="true"
                    layout="responsive"
                    width={860}
                    height={693}
                />
                
                <Teacup />
            
            </div>
            <div className={styles.container} >

                <Nav rollover={rollover} stop={stop} />
                <Header keyboardTyping={keyboardTyping} stop={stop} />
                <div className={styles.powerButton}>
                    <audio
                        ref={audioRef}
                        src={Computerprint}
                        onLoadedData={(e) => {
                            setDuration(e.target.duration.toFixed(2))
                        }}
                        onTimeUpdate={getCurrDuration}
                        loop
                    ></audio>

                    <ControlPanel
                        play={play}
                        isPlaying={isPlaying}
                        duration={duration}
                        currentTime={currentTime}
                    />

                </div>
                <main className={styles.main}>
                    {children}
                </main>

            </div>
        </>
    )
}

export default Layout
