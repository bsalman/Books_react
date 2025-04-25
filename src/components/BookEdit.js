import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book }) {
  const { editBookById } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    editBookById(book.id, title);
  };

  return (
    <>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          className="input"
          onChange={handleChange}
          value={title}
        />
        <button className="button is-primary">save</button>
      </form>
    </>
  );
}
export default BookEdit;
