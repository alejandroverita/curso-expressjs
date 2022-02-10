const Joi = require('joi');

const id = Joi.string().uuid();
const email = Joi.string().email();
const name = Joi.string().min(3).max(20).messages({
  "string.pattern.base": "First Name accepts alphabetic characters, numbers and spaces"
});

const lastName = Joi.string().min(2).max(50).messages({
    "string.pattern.base": "Last Name accepts alphabetic characters, numbers and spaces"
});
const age = Joi.integer().min(18).max(65)
const role = Joi.string().min(3).max(50)

const createUserSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  lastName: lastName.required(),
  age: age.required(),
  role: role.required()
})

const updateUserSchema = Joi.object({
  email: email,
  name: name,
  lastName: lastName,
  role: role
})

const getUserSchema = Joi.object({
  id: id.required()
})


module.exports = { createUserSchema, updateUserSchema, getUserSchema}
