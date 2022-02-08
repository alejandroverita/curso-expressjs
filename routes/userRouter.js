
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


module.exports = user;
