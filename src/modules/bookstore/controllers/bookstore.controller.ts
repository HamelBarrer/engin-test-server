import { Request, Response } from 'express';
import {
  allBooks,
  findBookById,
  insertBook,
  updatedBook,
} from '../repositories/bookstore.repository';

export const getBook = async (req: Request, res: Response) => {
  const bookId = Number(req.params.bookId);
  const data = findBookById(bookId);
  if (!data) {
    res.status(404).json({
      error: 'User not found',
    });

    return;
  }

  res.status(200).json(data);
};

export const getBooks = async (_: Request, res: Response) => {
  const data = allBooks();
  if (data.length === 0) {
    res.status(204).json();

    return;
  }

  res.status(200).json(data);
};

export const createBook = async (req: Request, res: Response) => {
  const data = insertBook(req.body);

  res.status(201).json(data);
};

export const updateBook = async (req: Request, res: Response) => {
  const bookId = Number(req.params.bookId);
  const data = updatedBook(bookId, req.body);

  if (data.id === 0) {
    res.status(404).json({
      error: 'User not found',
    });

    return;
  }

  res.status(200).json(data);
};
