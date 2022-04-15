const router = require('express').Router()

const { Puppies } = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const puppies = await Puppies.getPups()
    res.send(puppies)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const puppy = await Puppies.getPupById(+req.params.id)
    res.send(puppy)
  } catch (error) {
    next(error)
  }
})

module.exports = router
