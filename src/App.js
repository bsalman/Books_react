import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { fetchAllBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  // const idGenerator = (index) => {
  //   const random = Math.floor(Math.random() * 9999);
  //   const id = index.toString() + "_" + random.toString();
  //   return id;
  // };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      {/* adding createBook as props  */}
      <BookCreate />
    </div>
  );
}

export default App;
