import headerStyles from '../styles/Header.module.css'
import React, {useState} from 'react'

const Header = ({keyboardTyping, stop}) => {
  const [isMouseHovering, setIsMouseHovering] = React.useState(
    false
  );
    return (
      <div className = {headerStyles.container}>
            <div 
                  onMouseEnter ={() => {
                    setIsMouseHovering(true);
                     keyboardTyping();
                    }}
                  onMouseLeave ={() => {
                    setIsMouseHovering(false);
                       stop();
                  
                      }}
                  className = {headerStyles.typewriter}>
              password: FE_DEVELOPER?...
            </div>
      </div>
        
        
    )
}

export default Header
