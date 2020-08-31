import React, { useState, useEffect, useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './Bookdetail';

const BookList = () => {
    const { books } = useContext(BookContext)

    return books.length ?
        (
            <div className="book-list">
                <ul>
                    {
                        books.map(book => {
                            return (<BookDetails book={book} key={book.id} />)
                        })
                    }
                </ul>
            </div>
        )
        :
        (
            <div className="empty">No books to Read. Add Some</div>
        )
}
export default BookList;
