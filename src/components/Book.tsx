type myProps = {
  book: any;
  img: string;
  title: string;
  author: string;
  key:number;
};

const Book = ({ book }: myProps) => {
  const { img, title, author } = book;
  return (
    <article className="my-5 br-7 p-5">
      <img className="h-auto max-width-100" src={img} alt="" />
      <h1 className="mt-5 ">
        {title}
      </h1>
      <h4 className="text-blue-500">By : {author}</h4>
    </article>
  );
};

export default Book;
