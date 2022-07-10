const express = require('express')

const {codes: ctrl} = require('../../controllers')
const router = express.Router()

router.post('/', ctrl.addCode)


module.exports = router
