var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');


// POST request for userSignup.
router.post('/userSignUp', user_controller.signUp);

// POST request for userSignIn.
router.post('/userSignIn', user_controller.signIn);


module.exports = router;
