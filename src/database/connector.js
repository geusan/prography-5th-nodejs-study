const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('../db/example.json');
const db = low(adapter);

const defaultData = {
  todos: [], 
  users: []
}
db.defaults(defaultData).write();

module.exports = db;