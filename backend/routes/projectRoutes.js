const express = require('express');
const {
    webDevProj_get,
    webDevProjById_get,
    webDevProj_post,
    webDevProj_patch,
    graphicDesignProj_get,
    graphicDesignProjByCategory_get,
    graphicDesignProj_post,
    graphicDesignProj_put
} = require('../controllers/projectsController');

const router = express.Router();

// [WEB DEVELOPMENT]
// Retrieve all web developer project
router.get('/web-development', webDevProj_get);
// Retrieve single web developer project
router.get('/web-development/:id', webDevProjById_get);
// Add web developer projects
router.post('/web-development/add', webDevProj_post);
// Edit web developer projects
router.patch('/web-development/:id/edit', webDevProj_patch);
// [GRAPHIC DESIGN]
// Retrieve all graphic design project
router.get('/graphic-design', graphicDesignProj_get);
// Retrieve single graphic design project
router.get('/graphic-design/:category', graphicDesignProjByCategory_get);
// Add graphic design project
router.post('/graphic-design/add', graphicDesignProj_post);
// Edit graphic design projects
router.put('/graphic-design/:category/edit', graphicDesignProj_put);


// Module Export
module.exports = router;