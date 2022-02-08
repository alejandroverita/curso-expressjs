const express = require('express');
const faker = require('faker');
const categories = express.Router();

categories.get('/', (req, res)=> {
  res.json([
    {
      categories: faker.commerce.productAdjective(),
    },
    {
      categories: faker.commerce.productAdjective(),
    }
  ]);
});

categories.get('/:id',(req, res) => {
  const { id } = req.params;
  res.json({
    id,
    categorie: faker.commerce.productAdjective(),
  })
})

categories.get('/:categoryId/products/:productsId',(req, res) => {
  const { categoryId , productsId } = req.params;

  res.json({
    categoryId,
    productsId
  });
})

module.exports = categories;
