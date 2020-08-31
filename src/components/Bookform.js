import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const handleSubit = (e) => {
        e.preventDefault()
        addBook(title, author)
        setAuthor("")
        setTitle("")
    }
    return (
        <form onSubmit={handleSubit}>
            <input type="text" placeholder="Book Title" value={title}
                onChange={(e) => setTitle(e.target.value)} required autoComplete="off" autoCapitalize="on"
            />
            <input type="text" placeholder="Author Name" value={author}
                onChange={(e) => setAuthor(e.target.value)} required autoComplete="off"
            />
            <input type="submit" value="Add Book" />
        </form>
    );
}

export default NewBookForm;
