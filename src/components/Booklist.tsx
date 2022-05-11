import Book from "./Book";
const firstBook = {
  img: "https://m.media-amazon.com/images/I/71pQQ9mk8eL._AC_UY218_.jpg",
  title: "The Seven Husbands of Evelyn Hugo",
  author: "Taylor Jenkins Reid",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/61hXjgSiTKL._AC_UY218_.jpg",
  title: "The Bad Guys",
  author: "Ms. Kate Howard",
};

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL210_SR195,210_.jpg",
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
};
const Booklist = () => {
  return (
    <section className="flex justify-center align-center flex-wrap">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
};

export default Booklist;
