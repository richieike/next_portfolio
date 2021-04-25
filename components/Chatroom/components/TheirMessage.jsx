import React from 'react';
import styles from '../../../styles/Chatapp.module.css'
const TheirMessage = ({lastMessage, message}) => {

    //To check if it is the last message from the user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;


    return(

        <div className = {styles.messagerow}>
            {isFirstMessageByUser && (
                <div 
                    className = {styles.messageavatar}
                    style = {{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}

            {
                message?.attachments?.length > 0
                    ?(
                        <img 
                        src = {message.attachments[0].file}
                        alt = "message-attachment"
                        className = {styles.messageimage}
                        style = {{ marginLeft: isFirstMessageByUser ? '4px': '48px'}}
                        />
                    ) :(
                        
                        <div className = {styles.message} style = {{float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px': '48px' }}>
                         {message.text}     
                        </div>
                    )
                
            }
        </div>
    )

}

export default TheirMessage;