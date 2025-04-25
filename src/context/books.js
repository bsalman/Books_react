import { createContext, useState } from "react";
import axios from "axios";
//creating the Context
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      const updatedBooks = response.data;
      setBooks(updatedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookById = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      const updateBooks = books.filter((book) => book.id !== id);
      setBooks(updateBooks);
      console.log("Need to delete book with id", id);
    } catch (error) {
      console.log(error);
    }
  };

  const editBookById = async (id, newTitle) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle
      });
      const updateBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
      setBooks(updateBooks);
      console.log("Need to edit book with id", id);
    } catch (error) {
      console.log(error);
    }
  };

  // creating Book function
  const createBook = async (title) => {
    try {
      const response = await axios.post("http://localhost:3001/books", {
        title
      });
      const updateBooks = [...books, response.data];
      setBooks(updateBooks);
      console.log("Need to add book with title", title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchAllBooks,
        deleteBookById,
        editBookById,
        createBook
      }}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
