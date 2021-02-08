var express = require('express');
var router = express.Router();

var signupControler = require('../controller/userManagement/signup');
var loginControler = require('../controller/userManagement/login');

var memberControler = require('../controller/userManagement/members');

const { verifyReq } = require('../helpers/authHelper');

const passThru = [verifyReq];


router.post('/signup', signupControler.signUp)

router.post('/login', signupControler.signUp)

router.put('/members', passThru, memberControler.updateMemeberDetails)

router.post('/members', passThru, memberControler.reserveMeetingRoom)

router.post('/members/:userid', passThru, memberControler.bookRoomSpace)

module.exports = router;
