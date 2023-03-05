import React, {useState, useMemo, useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import '../styles/specificBook.css'
import imageNotFound from "../img/imageNotFound.png"
import { BooksProvider } from "../context/booksContext";
import Header from "./header";

export default function Book(props) {
    const books = useContext(BooksProvider)   
    const bookItem = books.books
    const user = JSON.parse(localStorage.getItem('user'))
    const usersBooks = JSON.parse(localStorage.getItem('usersBooks'))
    const userName = user.username
    const location = useLocation();
    const IDBook = location.state;
    let specificBook = ""
    
    for (let i = 0; i<bookItem.length; i++){
        if (bookItem[i].id ===IDBook){
            specificBook = bookItem[i]
        }   
    }

    let price = specificBook.price          
    let infoOfBook = ""    
    
    const onClickHandler = event => {
        const booksInfo = {
            "id": specificBook.id,
            "title": specificBook.title,
            "price": price,
            "count": quantity,
            "totalPrice": Number(sumTotal)   
        }
        booksInfo.id = specificBook.id

        if(quantity === ""){
            alert("Please enter the count of books")
        }else{
            usersBooks[specificBook.id]=(booksInfo)
            console.log(booksInfo)
            console.log(usersBooks)
            localStorage.setItem('usersBooks', JSON.stringify(usersBooks))            
        }
        window.location.reload(false) 
    }

    if (usersBooks[specificBook.id] != null){
        infoOfBook = `This book has already been added to the cart. Quantity in cart ${usersBooks[specificBook.id].count} pcs. If you want to change the quantity, please enter a new count.`    
    }

    const [quantity, setQuantity] = useState(0);
    function sumBooks(){
        return (quantity*price).toFixed(2)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sumTotal = useMemo(() => sumBooks(quantity, price),[quantity]);

    if(userName.length === 0){
        return (  
            <Navigate replace to="/" />         
        )

    } else{
        const bookContent =  (
            <div className="main">
                <h1 className="infoOfBook">{infoOfBook}</h1>
                <div className="book-content">
                    <img src={specificBook.image!==""?specificBook.image:imageNotFound} alt="book_image" />
                    <div className="book-about">
                        <p>Book name: <span>{specificBook.title}</span></p>
                        <p>Book author: <span>{specificBook.author}</span></p>
                        <p>Book level: <span>Beginner</span></p>
                        <p>Book tags: <span>core</span></p>
                    </div>

                    <div className="book-price">
                        <div>
                            <label id="price">Price $</label>
                            <p id="onePrice">{specificBook.price}</p>
                        </div>

                        <div className="varButton">
                            <div className="quantity">
                                <h4>Count</h4>
                                <div className="quantity_buttons">
                                    <button className="button_quantity" id="btn_less" onClick={() => setQuantity(quantity - 1)} disabled={quantity===0?true:false}>-</button>
                                    <p data-testid="quantity">{quantity}</p>
                                    <button className="button_quantity" id="btn_more" onClick={() => setQuantity(quantity + 1)} disabled={quantity===42?true:false}>+</button>
                                </div>                                 
                            </div>
                            <div className="sumTotal">
                                <h4>Total price</h4>
                                <p>{sumTotal}</p>
                            </div>
                            <div className="price-btn_varButton">
                                <button onClick={onClickHandler} disabled={quantity===0?true:false} className="btn" id="btn_add_to_cart"> Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="book-description">
                    <p>Description: <span>{specificBook.description}</span></p>
                </div>              
            </div>
        )
        
        
        return(
            <section className="book">
                <Header />
                {bookContent}
            </section>
        )        
    }

}