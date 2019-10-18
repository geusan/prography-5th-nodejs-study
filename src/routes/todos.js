const { Router } = require('express');
const validateTodo = require('../middlewares/validate.todo');
const TodoController = require('../controllers/TodoController')

const router = Router();

// middleware
router.use(validateTodo);

router.get('', TodoController.getTodos)
router.get('/:todo', TodoController.getTodo)
router.post('', TodoController.createTodo)
router.put('/:todo', TodoController.updateTodo)
router.delete('/:todo', TodoController.deleteTodo)

module.exports = router;