const UserService = require('../services/UserService');

const createUser = (req, res) => {
  const userService = new UserService();
  const user = userService.create(req.body.name);
  res.send({
    data: user.toJSON(),
  })
}

const getUsers = (req, res) => {
  const userService = new UserService();
  const users = userService.find();
  res.send({
    data: users,
  })
}

const getUser = (req, res) => {
  const UserService = new UserService();
  const User = UserService.findById(req.params.User);
  res.send({
    data: User
  })
}

const updateUser = (req, res) => {
  const userService = new UserService();
  const payload = {
    title: req.body.title,
    description: req.body.description,
    isDone: req.body.isDone,
  };
  const User = userService.update(req.params.User, payload);
  res.send({
    data: User,
  })
}

const deleteUser = (req, res) => {
  const userService = new UserService();
  userService.delete(req.params.user);
  res.send({
    data: 'success'
  })
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}