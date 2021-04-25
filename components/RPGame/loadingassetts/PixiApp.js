import React, { useState } from "react";
import { Stage, Container, Sprite, useTick, AppConsumer } from "@inlet/react-pixi";
import { settings, SCALE_MODES } from "pixi.js";
import GameAssets from '../loadingassetts/GameAssets'
settings.SCALE_MODE = SCALE_MODES.NEAREST;


const LoadZeeGame =() =>{

    return(
      
      <AppConsumer>
      {app => 
      <GameAssets app={app} />
      }
    </AppConsumer>
     
        
    );
}

const PixiApp = () => {
  return ( 
        <LoadZeeGame />      
  
  );
};

export default PixiApp;
