import React from "react";
import {Link} from "react-router-dom";

import '../styles/header.css'
import avatar from '../img/avatar.png'
import cart from '../img/cart.svg'

export default function Header(props) {
    const usersInfoBooks = JSON.parse(localStorage.getItem('usersBooks'))
    const userInfoName = JSON.parse(localStorage.getItem('user'))
    
    const userName = userInfoName.username!==""?userInfoName.username:"";
    // console.log(userName)
 
    function refreshPage() {
        window.location.reload(false) 
        let user = {
            username: "",
            userAvatar: ""
        }
        let usersBooks =[]
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('usersBooks', JSON.stringify(usersBooks))
    } 

    if(userName === ""){
        return(
            <section className="header">
                <div className="header_content">
                    <h1 className="header_title"> X-course task / Курочка Олена</h1>
                </div>          
            </section>
        )
    } else{
        return(
            <section className="header">
                <div className="header_content">
                    <div className="header_content_title">
                        <h1 className="header_title"> X-course task / Курочка Олена</h1>
                    </div>

                    <div className="header-content_navigation">
                        <button className="button_cart">
                            <Link to="/cart"><img src={cart} alt="cart"/></Link>
                            <p className = {usersInfoBooks.length!==0 ? 'show' : 'hide' }>&#128218;</p>
                        </button>
                        <button className="signOut" type="submit" onClick={refreshPage}>
                            <Link to="/">Sign-Out</Link>   
                        </button>
                        <img className="avatar_image" src={avatar} alt="avatar"/>
                        <p>{userName}</p> 
                    </div>                    
                </div>          
            </section>
        )
    }

}