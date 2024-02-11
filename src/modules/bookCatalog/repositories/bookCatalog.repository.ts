import { findBookById } from '../../bookstore/repositories/bookstore.repository';
import { bookStore } from '../../bookstore/store/bookstore.store';
import { ERROR_MESSAGE } from '../constants/error.constant';
import {
  BookNotFound,
  BookStoreNotFound,
  BookStoreNotStock,
} from '../erros/error';
import { BookCatalog } from '../models/bookCatalog.model';
import { bookCatalogStore } from '../store/bookCatalog.store';

export const findBookCatalogById = (bookId: number) => {
  const data = bookCatalogStore.find((book) => book.id === bookId);
  return data;
};

export const allBookCatalogs = () => {
  return bookCatalogStore.sort((a, b) => b.id - a.id);
};

export const insertBookCatalog = (book: BookCatalog) => {
  book.id = Date.now();

  const bookSto = findBookById(book.bookStoreId);
  if (!bookSto) {
    throw new BookStoreNotFound(ERROR_MESSAGE.BOOK_STORE_NOT_FOUND);
  }

  const bookStoreStockQuantity = bookSto.stock - 1;
  if (bookStoreStockQuantity === 0) {
    throw new BookStoreNotStock(ERROR_MESSAGE.BOOK_STORE_NOT_STOCK);
  }

  const bookIndex = bookStore.findIndex((el) => el.id === book.bookStoreId);
  bookStore[bookIndex].stock -= 1;

  bookCatalogStore.push(book);
  return book;
};

export const updatedBookCatalog = (bookId: number, book: BookCatalog) => {
  const dataIndex = bookCatalogStore.findIndex((el) => el.id === bookId);
  if (dataIndex < 0) {
    throw new BookNotFound(ERROR_MESSAGE.BOOK_NOT_FOUND);
  }

  const bookRegister = findBookCatalogById(bookId);
  book.id = bookRegister!.id;
  bookCatalogStore[dataIndex] = book;

  return book;
};
