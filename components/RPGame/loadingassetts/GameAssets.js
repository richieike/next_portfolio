import React, {useRef, useState}  from 'react'
import Player from '../../../components/RPGame/player'
import Map from '../../../components/RPGame/map'
import gameStyles from '../../../styles/Rpg.module.css'
import ZeeMusic from '../../../public/sounds/ZeeMusic.mp3';
import ControlPanel from '../soundcontrols/ControlPanel'

export default function GameAssets() {
    //Sound variables
    const [percentage, setPercentage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef();

    //music Variables
  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.2;

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
        <div className = {gameStyles.mapcontainer}>
        <Map/>
        <Player skin = "zee"/>
        <div className = {gameStyles.keysContainer}>
     <img src = "/imgs/skins/keys.gif" alt = "keys" width = "175" height = "125"/>  
    
    </div>
    <div className = {gameStyles.toolbartextcontainer}>
    
        Drag the <img src = "/imgs/skins/drag-handle.png" alt = "drag-handle" width = "32" height = "32"/>   and place objects on the World   
       
    </div>  
    <div className = {gameStyles.musicButton}>
      
      <audio
          ref={audioRef}
          src={ZeeMusic}
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
          
        </div>
    );
}
