import React, { createContext, useState } from 'react';
import { uuid as v4 } from 'uuidv4';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
        { title: 'the final empire', author: 'brandon sanderson', id: 2 }
    ])
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: v4() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{ addBook, books, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider