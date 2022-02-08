const express = require('express');
const routerApi = require('./routes');

const app = express();

const port = 3005;

app.get('/', (req, res)=> {
  res.send('Hellow world')
})

routerApi(app)

app.listen(port, ()=> {
  console.log(`Mi puerto es ${port}`)
})
