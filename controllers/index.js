const router = require('express').Router()

router.use('/api', require('./noteController.js'))

module.exports = router