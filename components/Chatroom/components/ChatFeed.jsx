import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import styles from '../../../styles/Chatapp.module.css'

const ChatFeed = (props) => {
   //Destructuring props
   const {chats, activeChat, userName, messages} = props;

   //assign activeChat via chats array
   const chat = chats && chats[activeChat];

   //function for checking who has read the last message via maping through all people
   const renderReadReciepts = (message, isMyMessage) =>{
       return chat.people.map((person, index)=> person.last_read == message.id &&(
            <div
                key = {`read_${index}`}
                className = {styles.readreceipts}
                style = {{
                            float: isMyMessage? 'right' : 'left',
                            backgroundImage: `url(${person?.person?.avatar})`,
                }}
            />
        ))

   }

   //used for fetching messages
   const renderMessages = () => {

        //create key for retrieving messages
        const keys = Object.keys(messages);

        //Use map Array Method for retrieving message and use Key as the unique Identifyer
       return keys.map( (key, index)=>{

            const message = messages[key];
            //Turnary operator used to check each message and find out if it is the last message
            const lastMessageKey = index === 0 ? null: keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return(
                <div key = {`msg_${index}`} style = {{width: '100%'}}>
                    <div className = {styles.messageblock}>
                        {
                            //Pass message as prop
                            isMyMessage? 
                            <MyMessage message = {message}/>
                            :<TheirMessage message = {message} lastMessage = {messages[lastMessageKey]}/>
                        }

                    </div>
                    <div className = {styles.readreceipts} style = {{marginRight: isMyMessage? '18px': '0px', marginLeft: isMyMessage? '0px': '68px'}}>
                        {renderReadReciepts(message,isMyMessage)}
                    </div>
                </div>
            )

       })


   }

 

   //Check for loaded chat
   
   if(!chat) return 'Loading...';


    return (
        <div className = {styles.chatfeed}>
            <div className = {styles.chattitlecontainer}>
                <div className ={styles.chattitle}>
                    {chat.title}
                </div>
                <div className = {styles.chatsubtitle}>
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style = {{height: '100px'}}/>
            <div className = {styles.messageformcontainer}>
                <MessageForm {...props} chatId= {activeChat}/>
            </div>
        </div>
    )

}

export default ChatFeed;