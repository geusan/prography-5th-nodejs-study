class Todo {
  
  constructor(id, title, description, isDone = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isDone = isDone;
  }

  static newInstance (title, description) {
    const id = `${Date.now()}`;
    return new Todo(id, title, description);
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      isDone: this.isDone,
    };
  }

  static fromData(data) {
    return new Todo(data.id, data.title, data.description, data.isDone);
  }
}

module.exports = Todo;
