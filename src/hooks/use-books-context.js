import { useContext } from "react";
import BooksContext from "../context/books";

const useBooksContext = () => {
  return useContext(BooksContext);
};

export { useBooksContext };
//this is an example für custom hook we can use it in any component
