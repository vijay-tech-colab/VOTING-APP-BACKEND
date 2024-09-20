const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userAthenticate = require('../middlewares/auth');
router.post('/signup',userController.userSignUp);
router.post('/login',userController.userSignIn);
router.get('/profile',userAthenticate,userController.userProfile);
router.post('/profile/password',userAthenticate,userController.userPasswoedChanged);
module.exports = router;