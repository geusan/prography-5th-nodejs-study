const { Router } = require('express');
const BookController = require('../controllers/BookController')

const router = Router();

router.get('', BookController.getBooks)
router.get('/:todo', BookController.getBook)
router.post('', BookController.createBook)
router.put('/:todo', BookController.updateBook)
router.delete('/:todo', BookController.deleteBook)

module.exports = router;