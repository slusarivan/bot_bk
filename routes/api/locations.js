const express = require('express')

const {locations: ctrl} = require('../../controllers')
const router = express.Router()


router.post('/', ctrl.addLocation)


module.exports = router
