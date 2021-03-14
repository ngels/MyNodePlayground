var express = require('express');
var router = express.Router();

// var indexRouter = require('./index');

var usersRouter = require('./users');
var exchangeRouter = require('./currency')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.use('/', indexRouter);

router.use('/users', usersRouter);
router.use('/exchange', exchangeRouter );

module.exports = router;
