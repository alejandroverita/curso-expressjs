const express = require('express');

const app = express();

const port = 3005;

app.get('/', (req, res)=> {
  res.send('Hellow world')
})

app.listen(port, ()=> {
  console.log(`Mi puerto es ${port}`)
})
