var express = require('express');
var router = express.Router();
const { UsersController } = require("../api/controllers");
/* GET the users listing function */
router.get('/all', UsersController.getUsers);
module.exports = router;