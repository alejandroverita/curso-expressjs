
const express = require('express');
const UserService = require('../services/userService')

const service = new UserService();
const user = express.Router();

user.get('/', async (req, res) => {
  const user = await service.find();
  // const { limit, offset } = req.query;
  res.json(user)
});

user.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user)
})

user.post('/', async(req, res) => {
  const body = req.body;
  const newUser = await service.create(body)
  res.json(newUser);
})

user.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = await service.update(id, body)
  res.json(user)
})

user.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.delete(id)

  res.status(200).json(user)
});


module.exports = user;
