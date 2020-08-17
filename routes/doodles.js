const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const sse = require('./sse');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* GET doodles listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a doodle');
});

router.post('/', function(req, res) {
  if (req.body.doodle) {
    // sse.sendDoodle(req.body.doodle);
    console.log(req.body.doodle);
  }
});

module.exports = router;
