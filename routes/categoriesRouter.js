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

categories.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

categories.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    id,
    message: 'Parcheado',
    data: body,
  })
})

categories.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    message: 'delete',
  })

  res.status(200).json({
    // data: products,
    message: "Delete successfull"

  })
});

module.exports = categories;
