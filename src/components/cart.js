import React from "react";
import {Navigate, Link} from "react-router-dom";
import '../styles/cart.css'
import cart from '../img/cart.svg'

export default function Cart(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    const userName = user.username
    const usersBooks = JSON.parse(localStorage.getItem('usersBooks'))
    let totalPrice;
    let summary = 0;
    let items =[]

    for(let i=0; i<usersBooks.length; i++){
        if(usersBooks[i]!=null){
            totalPrice = usersBooks[i].totalPrice
            summary += totalPrice
            items.push(usersBooks[i])
        }
    }
    const clearCart = event => {
        let usersBooks =[]
        localStorage.setItem('usersBooks', JSON.stringify(usersBooks))
        window.location.reload(false)         
    }


    if(userName.length === 0){
        return (  
            <Navigate replace to="/" />         
        )
    } else{
    if(usersBooks.length>0){
        return(
            <section className="content">
                <div className="main">
                    <div className="button_purchase">
                        <button onClick={clearCart}>Purchase</button>
                    </div>
                    
                    <div className="books_cart" >
                        {items.map(item => (
                            <div className="book_cart" key={item.id}>    
                                <h2 className="book_title">{item.title}</h2>
                                <p className="book_price">$ {item.price}</p>
                                <p className="book_count"> Count: {item.count}</p>
                                <h3 className="book_totalPrice">$ {item.totalPrice}</h3>
                            </div>
                        ))}                        
                        
                        <div className="summary">
                            <h1>Total price, $ <span>{summary}</span> </h1>
                        </div>
                    </div>
                </div>
            </section>
        )     
    }else{
        return(
            <section className="content_cartEmpty">
                <div className="main">
                    <div className="button_purchase">
                        <button  disabled className="button">Purchase</button>
                    </div>
                    
                    <div className="main_content">
                        <img className="cartImg" src={cart} alt="cart_image"/>
                        <h1>Cart is empty...</h1> 
                        <Link className="toTheCatalog" to="/bookList">Go to the catalog &#128218;</Link>                    
                    </div>
                </div>
            </section>
        )
    }
}
}