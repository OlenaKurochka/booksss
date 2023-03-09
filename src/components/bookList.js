/* eslint-disable array-callback-return */
import React, {useState, useContext} from "react";
import {Link, Navigate} from "react-router-dom";
import '../styles/bookList.css'
import imageNotFound from "../img/imageNotFound.png"
import { BooksProvider } from "../context/booksContext";



export default function BookList(props) {
    const books = useContext(BooksProvider)    
    const user = JSON.parse(localStorage.getItem('user'))
    const userName = user.username
    let priceMIN;
    let priceMAX;
    const [foundTitle, setFoundTitle] = useState(books.books);
    const filter = (e) => {
        const value = e.target.value;

        if(value ==="All"){
            priceMIN = 0;
            priceMAX = 1000;
            setFoundTitle(books.books);
        }else if(value ==="0$-15$"){
            priceMIN = 0;
            priceMAX = 15;
            const results = books.books.filter((book) => {
                if (book.price>priceMIN && book.price<= priceMAX){
                    return (book.price)
                }
            })
            setFoundTitle(results);
        }else if(value ==="15$-30$"){
            priceMIN = 15;
            priceMAX = 30;
            const results = books.books.filter((book) => {
                if (book.price>priceMIN && book.price<= priceMAX){
                    return (book.price)
                }
            })
            setFoundTitle(results);
        }else if(value ==="30$ +"){
            priceMIN = 30;
            priceMAX = 1000;
            // eslint-disable-next-line array-callback-return
            const results = books.books.filter((book) => {
                if (book.price>priceMIN && book.price<= priceMAX){
                    return (book.price)
                }
            })
            setFoundTitle(results);
        }else {
            const results = books.books.filter((book) => {
                return book.title.toLowerCase().startsWith(value.toLowerCase());
            }); 
            setFoundTitle(results);
        }
    };

    const onClickHandler = event =>{
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }


    if(userName.length === 0){
        return (  
            <Navigate replace to="/" />         
        )}
    else{
        return(
            <section className="book_list">
                
                <div className="input-search">
                    <input onChange={filter} type="search" name="Search my book name" id="input-search__name" className="input-search__name" placeholder="Search my book name"/>
                    <select onChange={filter} id="input-search__name" className="input-search__price">
                        <option>Price</option>
                        <option>All</option>
                        <option>0$-15$</option>
                        <option>15$-30$</option>
                        <option>30$ +</option>
                    </select>
                </div>

                <div className="books-gallery">
                    {(foundTitle && foundTitle.length > 0) ? (foundTitle.map((book) => (
                        <div className="divForBook" key={book.id} title={book.shortDescription}>
                            <img className="booksImg" src={book.image!==""?book.image:imageNotFound} alt="book_image"/>
                            <h1 className="booksTitle">{book.title.length<=24?book.title:`${book.title.slice(0, 24)}...`}</h1>
                            <h2 className="booksAuthor">{book.author}</h2>
                            <div className="divFooter">
                                <h3 className="booksPrice">{book.price}</h3>
                                <button className="buttonView" type="submit"> 
                                    <Link className="linkView" to="/book" state={book.id}>View</Link>
                                </button> 
                            </div>
                        </div>
                    ))) : (
                        <h1 className="title_noResult">No results found!</h1>
                    )}
                    
                </div>

                <button onClick={onClickHandler} className="up_btn" id="up_btn" title="Up">&#8679;</button>

            </section>
        )
    }
}