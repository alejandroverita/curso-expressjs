const Joi = require('joi');

const id = Joi.number().integer().min(0);
const title = Joi.string();
const technology = Joi.string();
const date = Joi.date();
const status = Joi.boolean();
const linkProject = Joi.string().min(10);
const image = Joi.string();
const description = Joi.string().min(10);

const getPortfolioSchema = Joi.object({
  id: id.required(),
})

const createPortfolioSchema = Joi.object({
  title: title.required(),
  technology: technology.required(),
  date: date.required(),
  status: status.required(),
  linkProject : linkProject.required(),
  image: image.required(),
  description: description.required(),
})

const updatePortfolioSchema = Joi.object({
  title: title,
  technology: technology,
  date: date,
  status: status,
  linkProject: linkProject,
  image: image,
  description: description
})

module.exports = { getPortfolioSchema, createPortfolioSchema, updatePortfolioSchema}


