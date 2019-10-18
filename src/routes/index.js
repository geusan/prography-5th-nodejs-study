const { Router } = require('express');
const auth = require('../middlewares/auth')
const todos = require('./todos');
const users = require('./users');

const router = Router();

// middleware
router.use(auth);

router.use('/todos', todos)
router.use('/users', users)

module.exports = router;