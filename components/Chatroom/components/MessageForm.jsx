import React from 'react';
import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import styles from '../../../styles/Chatapp.module.css';
import {SendOutlined, PictureOutlined} from '@ant-design/icons';
const MessageForm = (props) => {

    //initial state of value is an empty string
    const [value, setValue] = useState('');
    //Destructuring props
    const {chatId, creds} = props;

    //Event Handlers
    const handleSubmit = (event) => {
        //prevents browser refresh
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, {text});

        //reset value to empty string after message sent 
        setValue('');

    }

    const handleChange = (event) => {
        //Store value of input
        setValue(event.target.value);

        isTyping(props, chatId);


    }

    const handleUpload = (event) => {

        sendMessage(creds, chatId, {files: event.target.files, text: ''});
    }

    return(

       <form className = {styles.messageform} onSubmit = {handleSubmit}>
           <input  
                className = {styles.messageinput}
                placeholder = "Send message"
                value = {value}
                onChange = {handleChange}
                onSubmit = {handleSubmit}

           />
           <label htmlFor = "upload-button">
               <span className = {styles.imagebutton}>
                   <PictureOutlined className = {styles.pictureicon}/>
               </span>

           </label>
           <input 
                type = "file"
                multiple = {false}
                id = "upload-button"
                style = {{display:  'none'}}
                onChange = {handleUpload}
           />
            <button type = "submit" className = {styles.sendbutton}>
                <SendOutlined className = {styles.sendicon}/>
            </button>
       </form>
    ) 

}

export default MessageForm;