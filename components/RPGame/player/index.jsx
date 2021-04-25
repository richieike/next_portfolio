import React from 'react';
import Actor from '../actor';
import useKeyPress from '../hooks/use-key-press';
import useWalk from '../hooks/use-walk'

function Player({skin})  {

    const {dir, step, walk, position} = useWalk(4);

    //Set individual sprite size
    const data ={
        h: 156,
        w: 234,

    };

    //custom hook 
    useKeyPress((e)=> {
     
        walk(e.key.replace("Arrow", "").toLowerCase());

        e.preventDefault();
    });


    return (
        <Actor 
        sprite = {`"/imgs/skins/${skin}.png"`} 
        data = {data} 
        step = {step} 
        dir = {dir}
        position = {position}/>
    )
}

export default Player