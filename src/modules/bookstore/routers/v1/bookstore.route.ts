import { Router } from 'express';
import {
  createBook,
  getBook,
  getBooks,
  updateBook,
} from '../../controllers/bookstore.controller';

const router = Router();

router.get('/:bookId', getBook);
router.get('/', getBooks);
router.post('/', createBook);
router.put('/:bookId', updateBook);

export default router;
