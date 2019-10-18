const UserRepository = require('../database/repositories/UserRepository')
const User = require('../models/User')

class UserService {

  constructor() {
    this.userRepository = new UserRepository();
  }

  create(name) {
    const user = User.newInstance(name);
    this.userRepository.create(user.toJSON())
    return user;
  }

  find() {
    const usersData = this.userRepository.find();
    return usersData.map((todoData) => User.fromData(todoData));
  }

  findById(id) {
    const user = User.fromData(this.userRepository.findById(id));
    return user;
  }

  update(id, data) {
    const user = User.fromData(this.userRepository.findById(id));
    user.name = data.name || user.name;
    this.userRepository.update(id, user.toJSON());
    return user;
  }

  delete(id) {
    console.log(this.userRepository.delete(id));
  }
}

module.exports = UserService;
