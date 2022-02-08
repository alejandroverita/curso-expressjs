const productsRouter = require('./productsRouter');
const userRouter = require('./userRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app){
  app.use('/api/products', productsRouter);
  app.use('/api/user', userRouter);
  app.use('/api/categories', categoriesRouter);
}

module.exports = routerApi;
