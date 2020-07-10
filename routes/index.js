const express = require('express')
const mongoose = require('mongoose');
const bing = require('../controller/bing')
const router = express.Router()
router.get('/', bing.getAll)
module.exports = router