var express = require('express');
var router = express.Router();
const currencyController = require("../api/controllers/currencyController");

/* GET the exchange rate according to currency parameter */

router.get('/:currcode', currencyController.getExchangeRate);

module.exports = router;