
const express = require('express');
const UserService = require('../services/userService')
const validatorHandler = require('../middlewares/validatorHandler');
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schemas/categoriesSchema');


const service = new UserService();
const user = express.Router();

user.get('/', async (req, res) => {
  const user = await service.find();
  // const { limit, offset } = req.query;
  res.json(user)
});

user.get('/:id',
validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user)
  }
)

user.post('/',
validatorHandler(createUserSchema, 'body'),
  async(req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body)
      res.json(newUser);
    } catch (error) {
      next(error)
    }
  }
)

user.patch('/:id',
validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

user.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.delete(id)

  res.status(200).json(user)
});


module.exports = user;
