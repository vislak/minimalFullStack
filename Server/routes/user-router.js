const express = require('express');
const UserCtrl = require('../controllers/user-ctrl')
const AuthenticateMiddleware = require('../middleware/checkAuth.middleware')



const router = express.Router()

router.post('/signUp', UserCtrl.createUser);

router.post('/signIn',UserCtrl.signInUser);
router.get('/profile',AuthenticateMiddleware,UserCtrl.UserProfile)


module.exports = router