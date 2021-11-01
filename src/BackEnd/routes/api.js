var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');


// POST request for userSignup.
router.post('/userSignUp', user_controller.signUp);

// POST request for userSignIn.
router.post('/userSignIn', user_controller.signIn);
 
// POST request for addSongLink.
router.post('/addSongLink', user_controller.addSongLink);

// POST request for removeSongLink.
router.post('/removeSongLink', user_controller.removeSongLink);

// POST request for ReceiveRoomData.
router.post('/ReceiveRoomData', user_controller.addRoom);
 
module.exports = router;
