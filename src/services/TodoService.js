const TodoRepository = require('../database/repositories/TodoRepository')
const Todo = require('../models/Todo')

class TodoService {

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  create(title, description) {
    const todo = Todo.newInstance(title, description);
    this.todoRepository.create(todo.toJSON())
    return todo;
  }

  find() {
    const todosData = this.todoRepository.find();
    return todosData.map((todoData) => Todo.fromData(todoData));
  }

  findById(id) {
    const todo = Todo.fromData(this.todoRepository.findById(id));
    return todo;
  }

  update(id, data) {
    const todo = Todo.fromData(this.todoRepository.findById(id));
    todo.title = data.title || todo.title;
    todo.description = data.description || todo.description;
    todo.isDone = data.isDone || todo.isDone;
    this.todoRepository.update(id, todo.toJSON());
    return todo;
  }

  delete(id) {
    console.log(this.todoRepository.delete(id));
  }
}

module.exports = TodoService;
