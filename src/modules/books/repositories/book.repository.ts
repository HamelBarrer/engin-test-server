import { Book } from '../models/book.model';
import { bookStore } from '../store/book.store';

export const findBookById = (bookId: number) => {
  const data = bookStore.find((book) => book.id === bookId);
  return data;
};

export const allBooks = () => {
  return bookStore.sort((a, b) => b.id - a.id);
};

export const insertBook = (book: Book) => {
  book.id = Date.now();
  bookStore.push(book);
  return book;
};

export const updatedBook = (bookId: number, book: Book) => {
  const dataIndex = bookStore.findIndex((el) => el.id === bookId);
  if (dataIndex < 0) {
    return <Book>{
      id: 0,
      title: '',
      author: '',
      details: '',
    };
  }

  const bookRegister = findBookById(bookId);
  book.id = bookRegister!.id;
  bookStore[dataIndex] = book;

  return book;
};
