import { Bookstore } from '../models/bookstore.model';
import { bookStore } from '../store/bookstore.store';

export const findBookById = (bookId: number) => {
  const data = bookStore.find((book) => book.id === bookId);
  return data;
};

export const allBooks = () => {
  return bookStore.sort((a, b) => b.id - a.id);
};

export const insertBook = (book: Bookstore) => {
  book.id = Date.now();
  bookStore.push(book);
  return book;
};

export const updatedBook = (bookId: number, book: Bookstore) => {
  const dataIndex = bookStore.findIndex((el) => el.id === bookId);
  if (dataIndex < 0) {
    return <Bookstore>{
      id: 0,
      title: '',
      author: '',
      price: 0,
      stock: 0,
    };
  }

  const bookRegister = findBookById(bookId);
  book.id = bookRegister!.id;
  bookStore[dataIndex] = book;

  return book;
};
