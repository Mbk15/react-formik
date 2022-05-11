type myProps = {
  img: string;
  title: string;
  author: string;
};

const Book = ({ img, title, author }: myProps) => {
  return (
    <article className="my-5 br-7 p-5">
      <img className="h-auto max-width-100" src={img} alt="" />
      <h1>{title}</h1>
      <h4>By : {author}</h4>
    </article>
  );
};

export default Book;
