import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const { deleteBookById } = useContext(BooksContext);
  const [editShow, setEditShow] = useState(false);
  const handelEditShowClick = (e) => {
    setEditShow(!editShow);
  };
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleSubmit = () => {
    setEditShow(!editShow);
  };
  let content = <h3>{book.title}</h3>;
  if (editShow) {
    content = <BookEdit book={book} onEdit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img
        alt="book-img"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handelEditShowClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
