import { ERROR_MESSAGE } from '../constants/error.constant';

export class BookNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = ERROR_MESSAGE.BOOK_NOT_FOUND;
  }
}

export class BookStoreNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = ERROR_MESSAGE.BOOK_STORE_NOT_FOUND;
  }
}
export class BookStoreNotStock extends Error {
  constructor(message: string) {
    super(message);
    this.name = ERROR_MESSAGE.BOOK_STORE_NOT_STOCK;
  }
}
