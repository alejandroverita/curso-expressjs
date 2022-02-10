const express = require('express');
const CategoriesService = require('../services/categoriesService');
const validatorHandler = require('../middlewares/validatorHandler');
const {createCategorySchema, updateCategorySchema, getCategorySchema} = require('../schemas/categoriesSchema');

const service = new CategoriesService();

const categories = express.Router();

categories.get('/', async (req, res)=> {
  const categories = await service.find()
  res.json(categories);
});

categories.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id)
      res.json(category)
    } catch (error) {
      next(error)
    }
  }
)

categories.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body)
      res.json(newCategory);
    } catch (error) {
      next(error)
    }
  }
)

categories.patch('/:id',
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body)

      res.json(category)
    } catch (error) {
      next(error);
    }
  }
)

categories.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const index = await service.delete(id)
  res.status(200).json(index)
});

module.exports = categories;
