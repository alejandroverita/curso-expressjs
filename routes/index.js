const express = require('express');
const productsRouter = require('./productsRouter');
const userRouter = require('./userRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app){
  const router = express.Router();

  // Path global
  app.use('/api/v1', router)

  router.use('/products', productsRouter);
  router.use('/user', userRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
