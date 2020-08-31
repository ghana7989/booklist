import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import NewBookForm from './components/Bookform';

function App() {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <NewBookForm/>
    </BookContextProvider>
  );
}

export default App;
