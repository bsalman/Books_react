import { useState } from "react";

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSubmit = () => {
    setTitle("");
    onEdit(book.id, title);
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
