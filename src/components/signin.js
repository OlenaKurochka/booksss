import React, {useState} from "react";
import {Link} from "react-router-dom";

import '../styles/signin.css'
import avatar from '../img/avatar.png'

export default function Signin({onClick}) {
    const [username, setUsername] = useState("Enter your name(4-16 characters)");
    const [istrue, Setistrue] = useState(false);
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
        if (((isValidUsername.length)<4)||((isValidUsername.length)>16)){
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
                    <img src={avatar} alt="avatar"/>
                    <h2>Username</h2>
                    <input type="text" name="username" id="username" onClick={removeValue} onChange={onChangeHandler} value={username} style={{ color: istrue ? 'green' : 'red' }}/>
                    <button type="submit" onClick={onClickHandler} value={username} className = {istrue ? 'active' : 'disabled' } disabled={istrue ? false : true}> 
                        <Link className="link" to={istrue ? '/bookList' : '/' }>Sign-In</Link>
                    </button>                 
                </div>
            </main>
        </section>
    )
}