const express = require('express');
const { webDevProj_post } = require('../controllers/projectsController');

const router = express.Router();

// Add web developer projects
router.post('/web-developer/add', webDevProj_post);

// Module Export
module.exports = router;