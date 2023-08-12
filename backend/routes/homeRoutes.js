const express = require('express');
const { verify } = require('../middlewares/auth');
const { contact_get, openContact_get, contact_post, password, login } = require('../controllers/homeController');

const router = express.Router();

// Retrieve All Messages
router.get('/contacts', verify, contact_get);
// Open a message
router.get('/contacts/:id', verify, openContact_get);
// Create Message
router.post('/contacts/send', contact_post);
// Create Password
router.post('/password', verify, password);
// admin login
router.post('/admin', login);


// Module Export
module.exports = router;