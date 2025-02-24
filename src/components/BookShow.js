import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [editShow, setEditShow] = useState(false);
  const handelEditShowClick = (e) => {
    setEditShow(!editShow);
  };
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleSubmit = (id, newTitle) => {
    setEditShow(!editShow);
    onEdit(id, newTitle);
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
