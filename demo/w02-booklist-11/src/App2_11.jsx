import './App_11.scss';
import books_data from './booklist_data';

console.log('books_data', books_data);

const App2_11 = () => {
  return (
    <>
      <Booklist_11 />
    </>
  );
};

const Booklist_11 = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        const { id, img, title, author } = book;
        return <Book_11 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const Book_11 = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} />
      <div className='bookinfo'>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </div>
    </article>
  );
};

export default App2_11;