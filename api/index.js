const router = require('express').Router()

router.use('/puppies', require('./puppies'))

module.exports = router
