import React from 'react';
import styles from '../../../styles/Chatapp.module.css'
const MyMessage = ({message}) => {

    if(message?.attachments?.length > 0){
        //Rendering the Image if it is attached
        return(
            <img 
            src = {message.attachments[0].file}
            alt = "message-attachment"
            className = {styles.messageimage}
            style = {{float: 'right'}} 
            />
        )
    }

    return(

        <div className = {styles.message} style = {{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#30302F' }}>
            {message.text}
        
        </div>
    )

}

export default MyMessage;