const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', usersCtrl.create);

//login route
router.post('/login', usersCtrl.login);

//check token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
