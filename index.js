const express = require('express');
const routerApi = require('./routes');
const { logError, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')
const app = express();

const port = 3005;

app.use(express.json());

app.get('/', (req, res)=> {
  res.send('Hellow world')
})

routerApi(app)

/* Manejo de errores al final de la aplicacion */
app.use(logError);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, ()=> {
  console.log(`Mi puerto es ${port}`)
})
