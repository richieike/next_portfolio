import React, {useEffect, useState} from 'react';
import useDraggable from '../hooks/use-draggable';
import TilePalette from '../tile-palette';
import MapTiled from '../mapTiled';
import mapStyles from '../../../styles/Rpg.module.css';
import useSound from 'use-sound';
import MouseDoubleClick from '../../../public/sounds/MouseDoubleClick.mp3';
import Boulder from '../../../public/sounds/Boulder.mp3';
export default function Map()  {
    //Sound variables
    const [MouseClick] = useSound(MouseDoubleClick);
    const [BoulderSound] = useSound(Boulder);
    //Tile mab variables
    const [tileset, setTileset] = useState("houses");
    const [activeTile, setActiveTile] = useState({x: 1*32, y: 4*32});
    const [tiles, setTiles] = useState([]);
    const [mapSize, setMapsize] = useState({
        width: 800,
        height: 400,
    });
    const {position} = useDraggable("handle");

    useEffect(()=>{
        const _tiles = [];
        let id = 0;

        for (let y = 0; y < mapSize.height; y = y +32){
            const row = [];

            for(let x = 0; x < mapSize.width; x = x +32){
                row.push({
                    x, y, id: id++,  v: {x:-32, y: -32},
                });
            }
            _tiles.push(row);
        }
            setTiles(_tiles);
    }, []);

    return (
        <div
            style = {{
                position: "relative",
                width: 288,
                height: 640,
                backgroundImage: "grey",
                //overflow: "hidden",
                //border: "1px solid black",
             
            }}
        >
           <div onClick = {MouseClick} className = {mapStyles.tilecontainer}>
           <TilePalette 
            position = {position} 
            activeTile = {activeTile}
            setActiveTile = {setActiveTile}
            tileset = {tileset}
            size = {{
                    height: 188,
                    width: 240,
            }} />
            
           </div>
        
         <div onClick = {BoulderSound} className = {mapStyles.mapPosition}> 
            <MapTiled 
            tiles = {tiles} 
            tileset={tileset}
             size={mapSize} 
             activeTile = {activeTile} 
             setTiles = {setTiles} />
             </div>
        </div>
    )
}
