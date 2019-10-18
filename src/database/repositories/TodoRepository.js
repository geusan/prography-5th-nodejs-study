const BaseRepository = require('./BaseRepository');
const Todo = require('../../models/Todo');

class TodoRepository extends BaseRepository {
  constructor() {
    super('todos');
  }
}

module.exports = TodoRepository;
