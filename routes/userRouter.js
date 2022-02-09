
const express = require('express');
const UserService = require('../services/userService')

const service = new UserService();
const user = express.Router();

user.get('/', (req, res) => {
  const user = service.find();
  // const { limit, offset } = req.query;

  res.json(user)
});

user.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user)
})

user.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body)
  res.json(newUser);
})

user.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body)
  res.json(user)
})

user.delete('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.delete(id)

  res.status(200).json(user)
});


module.exports = user;
