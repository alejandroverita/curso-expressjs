
const express = require('express');

const user = express.Router();

user.get('/', (req, res) => {
  const { limit, offset } = req.query;

  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  }
  else{
    res.send('Nothing to look')
  }
});

user.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Alejandro',
    age: 21,
    sex: 'Male',
    role: 'Backend engineer'
  })
})

user.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

user.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    id,
    message: 'Parcheado',
    data: body,
  })
})

user.delete('/:id', (req, res) => {
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


module.exports = user;
