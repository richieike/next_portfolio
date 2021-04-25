import React from 'react'
import styles from '../styles/TeaCup.module.css'
const Teacup = () => {
    return (
        <div className = {styles.container}>
                <div className = {styles.cup}> 
                       
                    <div className = {styles.top}>
                    <div className = {styles.vapour}>
                            <span id = "steamOne"  ></span>
                            <span id = "steamTwo"  ></span>
                            <span id = "steamThree"  ></span>
                            <span id = "steamFour"  ></span>
                        </div>
                        <div className = {styles.vapour}>
                            <span id = "steamOne"  ></span>
                            <span id = "steamTwo" ></span>
                            <span id = "steamThree"  ></span>
                            <span id = "steamFour"  ></span>
                        </div>
                        <div className = {styles.circle}>
                            
                          <div className = {styles.tea}></div>
                        </div>
                    </div>
              
                     <div className = {styles.handle}>
                    </div>
             </div>
        
        </div>
    )
}

export default Teacup
