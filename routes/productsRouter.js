const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res)=> {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i  = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products)
})

router.get('/filter', (req, res) =>{
  res.send('Soy un filtro');
})

router.get('/:id', (req, res)=> {
  const { id } = req.params;
  console.log(req.params);
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
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

  res.status(200).json({
    // data: products,
    message: "Delete successfull"
  })
})

module.exports = router;
