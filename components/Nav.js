import React, {useState, useCallback} from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import Meta from '../components/Meta';


const Nav = ({rollover, stop}) => {
    const [isHovering, setIsHovering] = React.useState(
        false
      );

    const [isHome, setIsHome] = useState(true);
    const [isAboutMe, setIsAboutMe] = useState(false);
    const [isChatApp, setIsChatApp] = useState(false);
    const [isCovidApp, setIsCovidApp] = useState(false);
    const [isRpgGame, setIsRpgGame] = useState(false);


    //
    const onAboutMeClick  = useCallback( (e) =>{
       setIsHome(false);
        setIsAboutMe(true);
        setIsChatApp(false);
        setIsCovidApp(false);
        setIsRpgGame(false);
    }, []);

    const onHomeClick  = useCallback( (e) =>{
        setIsHome(true);
        setIsAboutMe(false);
        setIsChatApp(false);
        setIsCovidApp(false);
        setIsRpgGame(false);
    }, []);

    const onChatAppClick  = useCallback( (e) =>{
        setIsHome(false);
        setIsAboutMe(false);
        setIsChatApp(true);
        setIsCovidApp(false);
        setIsRpgGame(false);
    }, []);

    const onCovidAppClick  = useCallback( (e) =>{
        setIsHome(false);
        setIsAboutMe(false);
        setIsChatApp(false);
        setIsCovidApp(true);
        setIsRpgGame(false);
    }, []);

    const onRpgGameClick  = useCallback( (e) =>{
        setIsHome(false);
        setIsAboutMe(false);
        setIsChatApp(false);
        setIsCovidApp(false);
        setIsRpgGame(true);
    }, []);

    return (
        <>
        <Meta/>
        <nav  className = {navStyles.nav}>

            {!isHome ?(
                 <ul >
                 <li onMouseEnter ={() => {
                     setIsHovering(true);
                      rollover();
                     }}
                     onMouseLeave ={() => {
                         setIsHovering(false);
                          stop();
                         }}
                     
                 >
                     <nav onClick = {onHomeClick}>
                     <Link scroll={false} href = '/'>Home </Link>
                     </nav>
                    
                 </li>
                 
             </ul>
            ):(
                null
            )
            }
            {!isAboutMe?(<ul >
                 <li onMouseEnter ={() => {
                     setIsHovering(true);
                      rollover();
                     }}
                     onMouseLeave ={() => {
                         setIsHovering(false);
                          stop();
                         }}
                     
                 >
                     <nav onClick = {onAboutMeClick}><Link scroll={false} href = '/me'>About Me </Link> </nav>
                 
                 </li>
                 
             </ul>):(null)}
             {!isChatApp?(<ul >
                 <li onMouseEnter ={() => {
                     setIsHovering(true);
                      rollover();
                     }}
                     onMouseLeave ={() => {
                         setIsHovering(false);
                          stop();
                         }}
                     
                 >
                     <nav onClick = {onChatAppClick}><Link scroll={false} href = '/chatapp'>Chat App </Link> </nav>
                 
                 </li>
                 
             </ul>):(null)}
             {!isCovidApp?(<ul >
                 <li onMouseEnter ={() => {
                     setIsHovering(true);
                      rollover();
                     }}
                     onMouseLeave ={() => {
                         setIsHovering(false);
                          stop();
                         }}
                     
                 >
                     <nav onClick = {onCovidAppClick}><Link scroll={false} href = '/covidapp'>Covid App </Link> </nav>
                 
                 </li>
                 
             </ul>):(null)}
             {!isRpgGame?(<ul >
                 <li onMouseEnter ={() => {
                     setIsHovering(true);
                      rollover();
                     }}
                     onMouseLeave ={() => {
                         setIsHovering(false);
                          stop();
                         }}
                     
                 >
                     <nav onClick = {onRpgGameClick}><Link scroll={false} href = '/rpggame'>RPG Beta </Link> </nav>
                 
                 </li>
                 
             </ul>):(null)}
        </nav>
        </>
       
       
    )
}

export default Nav
