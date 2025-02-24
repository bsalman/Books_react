import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const idGenerator = (index) => {
    const random = Math.floor(Math.random() * 9999);
    const id = index.toString() + "_" + random.toString();
    return id;
  };
  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => book.id !== id);
    setBooks(updateBooks);
    console.log("Need to delete book with id", id);
  };
  const editBookById = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updateBooks);
    console.log("Need to edit book with id", id);
  };

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: idGenerator(books.length), title: title }
    ];
    setBooks(updateBooks);
    console.log("Need to add book with title", title);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      {/* adding createBook as props  */}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
