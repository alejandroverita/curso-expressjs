const express = require('express');
const ProductsService = require('../services/productService');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res)=> {
  const products = service.find();
  res.json(products)
})

router.get('/filter', (req, res) =>{
  res.send('Soy un filtro');
})

router.get('/:id', (req, res)=> {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    id,
    message: 'Parcheado',
    data: body,
  })
})
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    message: 'delete',
  })

})

module.exports = router;
