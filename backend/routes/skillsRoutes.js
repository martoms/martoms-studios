const express = require('express');
const { skills_get, skills_post, skills_put } = require('../controllers/skillsController');

const router = express.Router();

// Retrieve Skills
router.get('/', skills_get);
// Add Skills
router.post('/add', skills_post);
// Edit Skills
router.put('/edit', skills_put);

// Module Export
module.exports = router;