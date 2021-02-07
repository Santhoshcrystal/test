var express = require('express');
var router = express.Router();

var signupControler = require('../controller/userManagement/signup');

router.post('/signup', signupControler.signUp)

module.exports = router;
