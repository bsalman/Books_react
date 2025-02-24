import { useState } from "react";
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add Book</h3>
      <form onSubmit={handlerSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}
export default BookCreate;
