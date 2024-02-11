import { Router } from 'express';
import {
  createBookCatalog,
  getBookCatalog,
  getBookCatalogs,
  updateBookCatalog,
} from '../../controllers/bookCatalog.controller';

const router = Router();

router.get('/:bookId', getBookCatalog);
router.get('/', getBookCatalogs);
router.post('/', createBookCatalog);
router.put('/:bookId', updateBookCatalog);

export default router;
