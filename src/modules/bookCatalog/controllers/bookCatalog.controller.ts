import { Request, Response } from 'express';
import { ERROR_MESSAGE } from '../constants/error.constant';
import {
  BookNotFound,
  BookStoreNotFound,
  BookStoreNotStock,
} from '../erros/error';
import {
  allBookCatalogs,
  findBookCatalogById,
  insertBookCatalog,
  updatedBookCatalog,
} from '../repositories/bookCatalog.repository';

export const getBookCatalog = async (req: Request, res: Response) => {
  const bookId = Number(req.params.bookId);
  const data = findBookCatalogById(bookId);
  if (!data) {
    res.status(404).json({
      error: ERROR_MESSAGE.BOOK_NOT_FOUND,
    });

    return;
  }

  res.status(200).json(data);
};

export const getBookCatalogs = async (_: Request, res: Response) => {
  const data = allBookCatalogs();
  if (data.length === 0) {
    res.status(204).json();

    return;
  }

  res.status(200).json(data);
};

export const createBookCatalog = async (req: Request, res: Response) => {
  try {
    const data = insertBookCatalog(req.body);
    res.status(201).json(data);
  } catch (error) {
    const err = error as Error;

    if (err instanceof BookStoreNotFound) {
      res.status(404).json({
        error: err.message,
      });
      return;
    }
    if (err instanceof BookStoreNotStock) {
      res.status(404).json({
        error: err.message,
      });
      return;
    }
  }
};

export const updateBookCatalog = async (req: Request, res: Response) => {
  try {
    const bookId = Number(req.params.bookId);
    const data = updatedBookCatalog(bookId, req.body);

    res.status(200).json(data);
  } catch (error) {
    const err = error as Error;

    if (err instanceof BookNotFound) {
      res.status(404).json({
        error: err.message,
      });
    }
  }
};
