const TodoService = require('../services/TodoService');

const createTodo = (req, res) => {
  const todoService = new TodoService();
  const todo = todoService.create(req.body.title, req.body.description);
  res.send({
    data: todo.toJSON(),
  })
}

const getTodos = (req, res) => {
  const todoService = new TodoService();
  const todos = todoService.find();
  res.send({
    data: todos,
  })
}

const getTodo = (req, res) => {
  const todoService = new TodoService();
  const todo = todoService.findById(req.params.todo);
  res.send({
    data: todo
  })
}

const updateTodo = (req, res) => {
  const todoService = new TodoService();
  const payload = {
    title: req.body.title,
    description: req.body.description,
    isDone: req.body.isDone,
  };
  const todo = todoService.update(req.params.todo, payload);
  res.send({
    data: todo,
  })
}

const deleteTodo = (req, res) => {
  const todoService = new TodoService();
  todoService.delete(req.params.todo);
  res.send({
    data: 'success'
  })
}

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
}