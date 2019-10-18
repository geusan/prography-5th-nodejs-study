class User {

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
  }

  static newInstance(name) {
    const id = `${Date.now()}`;
    return new User(id, name);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  static fromData(data) {
    return new User(data.id, data.name);
  }
}

module.exports = User;
