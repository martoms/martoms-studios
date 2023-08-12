const express = require('express');
const {
    webDevProj_get,
    webDevProjById_get,
    webDevProj_post,
    webDevProj_patch
} = require('../controllers/projectsController');

const router = express.Router();

// Retrieve all web developer projects
router.get('/web-development', webDevProj_get);
// Retrieve single web developer project
router.get('/web-development/:id', webDevProjById_get);
// Add web developer projects
router.post('/web-development/add', webDevProj_post);
// Edit web developer projects
router.patch('/web-development/:id/edit', webDevProj_patch);

// Module Export
module.exports = router;