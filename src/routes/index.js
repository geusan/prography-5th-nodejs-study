const { Router } = require('express');
const auth = require('../middlewares/auth')
const todos = require('./todos');

const router = Router();

// middleware
router.use(auth);

router.use('/todos', todos)

module.exports = router;