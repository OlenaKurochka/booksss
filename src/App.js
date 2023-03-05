import './styles/App.css';
import React from "react";
import { Routes, Route} from 'react-router-dom';
import Signin from './components/signin';
import BookList from './components/bookList';
import Book from './components/book';
import Cart from './components/cart';
import Page404 from './components/page-404';
import { Layout } from './components/layout';
import { BooksProvider } from './context/booksContext';
import books from './books.json'

export default function App() {


  return (
    <BooksProvider.Provider value={books}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Signin />} />
            <Route path="/bookList" element={<BookList />} />
            <Route path="/book" element={<Book />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Page404/>} />              
          </Route>
        </Routes>  
      </div>      
    </BooksProvider.Provider>
  );
}

