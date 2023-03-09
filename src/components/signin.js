import React, {useState} from "react";
import {Link} from "react-router-dom";

import '../styles/signin.css'
import avatar from '../img/avatar.png'
import question from "../img/question.png"

export default function Signin({onClick}) {
    const [username, setUsername] = useState("Enter your name");
    const [istrue, Setistrue] = useState(false);
    const [isValidate, SetIsValidate] = useState(false);
    let user = {
        username: username,
        userAvatar: "/img/avatar.png"
    }
    let usersBooks =[]


    const removeValue = event => {
        event.target.value = ""
    }

    const onChangeHandler = event => {
        setUsername(event.target.value); 
        const isValidUsername = event.target.value;
        const validateUsername = isValidUsername.match(/^[A-Za-z0-9]+$/)
        if ((((isValidUsername.length)<4)||((isValidUsername.length)>16)) || validateUsername==null){
            Setistrue(false)
        }else{
            Setistrue(true)
        }            
    };

    const onClickHandler = event => {
        setUsername(event.target.value); 
        let user = {
            username: username,
            userAvatar: "/img/avatar.png"
        }
        let usersBooks =[]

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('usersBooks', JSON.stringify(usersBooks))

        window.location.reload(false) 
    }
     

    return(
        <section className="signin">
            <main>
                <div className="main-content">
                    <img className="avatar" src={avatar} alt="avatar"/>
                    <h2>Username</h2>
                    <div className="input_container">
                        <input onClick={removeValue} type="text" name="username" id="username" onChange={onChangeHandler} value={username} style={{ color: istrue ? 'green' : 'red' }}/>
                        <img className="question"  src={question} alt="question" title="Please enter 4 to 16 characters. The username must begin with and contain only the following characters: a-z,A-Z,0-9"/>                      
                    </div>                    
                    <button type="submit" onClick={onClickHandler} value={username} className = {istrue ? 'active' : 'disabled' } disabled={istrue ? false : true}> 
                        <Link className="link" to={istrue ? '/bookList' : '/' }>Sign-In</Link>
                    </button>                 
                </div>
            </main>
        </section>
    )
}