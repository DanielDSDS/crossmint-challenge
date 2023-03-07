const express = require('express')
const router = express.Router()
const MegaverseController = require('../controllers/megaverse.controllers')

router.post('/load-map', MegaverseController.loadCustomMap)

module.exports = router
