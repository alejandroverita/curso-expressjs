const express = require('express');
const CategoriesService = require('../services/categoriesService');

const service = new CategoriesService();

const categories = express.Router();

categories.get('/', (req, res)=> {
  const categories = service.find()
  res.json(categories);
});

categories.get('/:id',(req, res) => {
  const { id } = req.params;
  const category = service.findOne(id)
  res.json(category)
})

categories.get('/:categoryId/products/:productsId',(req, res) => {
  const { categoryId , productsId } = req.params;

  res.json({
    categoryId,
    productsId
  });
})

categories.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body)
  res.json(newCategory);
})

categories.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body)

  res.json(category)
})

categories.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = service.delete(id)
  res.status(200).json(index)
});

module.exports = categories;
