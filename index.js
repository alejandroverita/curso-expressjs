const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logError, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('Not allowed'))
    }
  }
}
app.use(cors(options))

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
