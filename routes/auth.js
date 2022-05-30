const express = require('express');
const router = express.Router();
const { 
    loginForm,
    registerUser,
     registerForm,
 } = require('../controllers/authController');


router.get('/register', registerForm);
router.post('/register', registerUser);
router.get('/login', loginForm);



module.exports = router;