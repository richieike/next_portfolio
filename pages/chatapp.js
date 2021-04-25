import React, {useEffect} from 'react';
import styles from '../styles/Chatapp.module.css';
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from '../components/Chatroom/components/ChatFeed';
import LoginForm from '../components/Chatroom/components/LoginForm';
import ls from 'local-storage';

const chatapp = () => {
 
         //Condition  rendering
      if(!ls.get('username')) return <LoginForm/>
    return (
        <div className = {styles.container}>
             
           
            <ChatEngine
            
            height = "60vh"
            projectID = "7d8a1aa6-0128-4500-873f-9bdbca86a9d6"
            userName={ls.get('username')}
            userSecret = {ls.get('password')}

            

            //New prop for rendering chat feed using spread operator for me then one prop
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}

            />
            <style jsx global>{`
             html,
             body {
             padding: 0;
             margin: 0;
             font-family:LazenbyComp;
            }
            * {
             box-sizing: border-box;
            }
            `}</style>    
        </div>
    )
}

export default chatapp
