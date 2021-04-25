import React from 'react'

export default function MapTiled({tiles, setTiles, activeTile, tileset, size}) {
    
    function cloneMatrix (m){
        const clone = new Array(m.length);
        for (let i=0; i < m.length; ++i){
            clone[i] = m[i].slice(0);
        }
        return clone;
    }

    function dropTile ({x,y}){

        setTiles(prev => {
            //You have to clone matrix (like spread operator) to alter tile x and y
            const clone = cloneMatrix(prev);
            const tile = {
                ...clone[y][x],
                v: activeTile,
            };
            
            clone[y][x] = tile
            return clone;
        })
    }
    return (<div
            style = {{
                boxSizing: "border-box",
                background: `url(/imgs/skins/Middleground.png)`,
                width: size.width,

            }}
            > 

            {
                tiles.map((row, y) => <div style= {{ display: "flex" }}>
                        {
                            row.map((tile, x) => 
                            
                            <div 
                            onClick = {() => dropTile({x, y})}
                            style = {{
                            
                                background: `url(/imgs/skins/${tileset}.png) -${tile.v.x}px -${tile.v.y}px no-repeat`,
                                width: 32,
                                height: 32,
                            }}
                        />
                            )}
                     </div>)
            }
    </div>)
    
}
