const express = require('express');
const {
    webDevProj_get,
    webDevProjById_get,
    webDevProj_post,
    webDevProj_patch
} = require('../controllers/projectsController');

const router = express.Router();

// Retrieve all web developer projects
router.get('/web-developer', webDevProj_get);
// Retrieve single web developer project
router.get('/web-developer/:id', webDevProjById_get);
// Add web developer projects
router.post('/web-developer/add', webDevProj_post);
// Edit web developer projects
router.patch('/web-developer/:id/edit', webDevProj_patch);

// Module Export
module.exports = router;