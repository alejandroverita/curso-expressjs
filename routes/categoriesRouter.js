const express = require('express');
const CategoriesService = require('../services/categoriesService');

const service = new CategoriesService();

const categories = express.Router();

categories.get('/', async (req, res)=> {
  const categories = await service.find()
  res.json(categories);
});

categories.get('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await service.findOne(id)
  res.json(category)
})

categories.get('/:categoryId/products/:productsId',(req, res) => {
  const { categoryId , productsId } = req.params;

  res.json({
    categoryId,
    productsId
  });
})

categories.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body)
  res.json(newCategory);
})

categories.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = await service.update(id, body)

  res.json(category)
})

categories.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const index = await service.delete(id)
  res.status(200).json(index)
});

module.exports = categories;
