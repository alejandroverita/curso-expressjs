const boom = require('@hapi/boom');

function validatorHandler(schema, property){
// middlewares de forma dinamica
  return (req, res, next)=> {
    //la informacion dinamica viene en el request
    const data = req[property];
    const {error} = schema.validate(data, { abortEarly: false});

    if (error) {
      next(boom.badRequest(error));
    }

    next();
  }
}

module.exports = validatorHandler
