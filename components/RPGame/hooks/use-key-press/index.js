import {useEffect} from 'react';

export default function useKeyPress(fn){
    useEffect(() => {
       window.addEventListener("keydown", fn)
       //to prevent memory leek
       return () => window.removeEventListener("keydown", fn);
    }, [fn])//added to the dependency list so if function changes this hook will reload
}
