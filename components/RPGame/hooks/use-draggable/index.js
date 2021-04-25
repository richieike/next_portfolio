import React, {useEffect, useState} from 'react'

export default function useDraggable(id) {

    function move(e){
        const pos = {
            x: e.clientX,
            y: e.clientY,   
        }

        setPosition(pos);
    }
    
    const [position, setPosition] = useState({
        x:0, y:0,
    });

    useEffect(()=>{
        const handle = document.getElementById("handle");
        handle.addEventListener("mousedown", function(e){
            e.preventDefault();
            handle.style.pointerEvents = "none"; 

            document.body.addEventListener("mousemove", move)
            document.body.addEventListener("mouseup", () =>{
                document.body.removeEventListener("mousemove", move)
                handle.style.pointerEvents = "initial";
            })
        })
        
        return () => {
            document.removeEventListener("mousedown", move)
            document.removeEventListener("mouseup", move)
            document.removeEventListener("mousemove", move)
        }
    }, [])

    return{

        position
    }
}

   