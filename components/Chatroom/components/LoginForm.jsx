import React, {useState} from 'react';
import axios from 'axios';
import styles from '../../../styles/Chatapp.module.css'
import ls, {get,set} from "local-storage";
export const LoginForm = () => {
    //states for login 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        //prevent refresh
        e.preventDefault();
        
        const authObject = {'Project-ID' : "7d8a1aa6-0128-4500-873f-9bdbca86a9d6", 'User-Name': username, 'User-Secret': password};

        try {
            //make api chat engine request to retrieve all the headers and asign to authObject
             await   axios.get('https://api.chatengine.io/chats', {headers : authObject});
             //if successfull store username and password to local storage
             localStorage.setItem('username' , username);
             localStorage.setItem('password', password);
             //using local storage (ls) as dependency required()
            ls.set('username', username);
            ls.set('password', password);
             window.location.reload();

        } catch (error) {
            setError('invalid credentials')
        }
    
    }


    return (
            <div className = {styles.container}>
        <div className = {styles.wrapper}>
            <div className ={styles.form}>
                    <h1 className = {styles.title}>
                        Chat Application
                    </h1>
                    <form onSubmit = {handleSubmit}>
                            <input type = "text"  value = {username} onChange = {(e) => setUsername(e.target.value)} className = {styles.input} placeholder = "Username" required/>
                            <input type = "password"  value = {password} onChange = {(e) => setPassword(e.target.value)} className = {styles.input} placeholder = "Password" required/>
                            <div align = "center">
                            <div className = {styles.guest}>Guest Username: guest, Guest Password: guest (all lowercase)</div>
                                <button type = "submit" className = {styles.button}>
                                        <span>Start Chatting </span>
                                </button>
                                <h2 className = {styles.error}>{error}</h2>
                               
                            </div>
                    </form> 
            </div>  
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
        </div>
        
    )
}

export default LoginForm