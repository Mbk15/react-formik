import Book from "./Book";
import { books } from "../ServiceProvider/BookData";

const Booklist = () => {
  return (
    <section className="flex justify-center align-center flex-wrap">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
};

export default Booklist;
