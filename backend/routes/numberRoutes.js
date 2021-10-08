const express = require('express');
const getANumber = require('../controller/numberController');
const router = express.Router();

// Get one Number

router.get('/', getANumber);

module.exports = router;
