import React from 'react'

export  default function TilePalette ({tileset, position, size, activeTile, setActiveTile}) {
    const {width, height} = size;

    const tiles =[];
    let id = 0;

    //nested forloop for matrix
    for (let y = 0; y < height; y = y + 32) {
        const row =[];
        for(let x = 0; x < width; x = x + 32) {
            row.push({
                x, y, id: id++
            });
        }
        tiles.push(row);
    }

    return (
        
        <div
            id = "palette"
        style = {{
            position: "absolute",
            border: "transparent",
            top: position.y,
            left: position.x,
            zIndex: 100,
            backgroundColor: "white",

        }}
    >
            <img id = "handle" src = "/imgs/skins/drag-handle.png" alt = "drag handle"/>
            <div
                 style = {{

                    background: `url(/imgs/skins/${tileset}.png) -${activeTile.x}px -${activeTile.y}px no-repeat`,
                    width: 32,
                    height: 32,
                }}
            />
           
            {tiles.map((row, y) => (
            
                <div style = {{ display: "flex"}}>

                    {row.map((tile, x) => 
                    <div 
                    onClick = {()=> setActiveTile({x: x*32, y: y*32})}
                        style = {{
                           
                            background: `url(/imgs/skins/${tileset}.png) -${x*32}px -${y*32}px no-repeat`,
                            width: 32,
                            height: 32,
                        }}
                    />)}
                </div>
            ))}
    </div>
    )
}
