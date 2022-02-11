const express = require('express');
const PortfolioService = require('../services/portfolioService')
const validatorHandler = require('../middlewares/validatorHandler')
const { getPortfolioSchema, createPortfolioSchema, updatePortfolioSchema } = require('../schemas/portfolioSchema');

const router = express.Router();
const service = new PortfolioService();

router.get('/', async (req, res) => {
  const portfolio = await service.find();
  res.json(portfolio)
})

router.get('/:id',
  validatorHandler(getPortfolioSchema, 'params'),
  async (req, res, next)=> {
    try {
      const { id } = req.params;
      const project = await service.findOne(id)
      res.json(project)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createPortfolioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newProject = await service.create(body)

      res.json(newProject)

    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id',
  validatorHandler(updatePortfolioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const project = await service.update(id, body);
      res.json(project)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteProject = await service.delete(id)
      res.json(deleteProject)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;
