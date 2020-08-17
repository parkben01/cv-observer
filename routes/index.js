const express = require('express');
const router = express.Router();
// const SSE = require('../helpers/sse');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
