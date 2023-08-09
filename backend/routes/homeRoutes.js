const express = require('express');
const { index_get } = require('../controllers/homeController');

const router = express.Router();

// Go to Home Page
router.get('/', index_get);


// Module Export
module.exports = router;