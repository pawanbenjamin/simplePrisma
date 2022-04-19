const router = require('express').Router()

const prisma = require('../db/prisma')

router.get('/', async (req, res, next) => {
  try {
    const puppies = await prisma.puppies.findMany()
    res.send(puppies)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const puppy = await prisma.puppies.findUnique({
      where: {
        id: +req.params.id,
      },
    })
    res.send(puppy)
  } catch (error) {
    next(error)
  }
})

module.exports = router
