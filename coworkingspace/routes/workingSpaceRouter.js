var express = require('express');
var router = express.Router();

const { isAdmin } = require('../helpers/roleHelper');

var workSpaceControler = require('../controller/workingSpaceMgmt/workingSpace');

router.post('/coWorkSpace', workSpaceControler.NewWorkingSpace)

router.get('/coWorkSpace', workSpaceControler.getAllWorkingSpace)


module.exports = router;
