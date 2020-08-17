var express = require('express');
var router = express.Router();

function observeHandler(req, res, doodle) {
  this.response = res;

  const headers = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*",
  };

  this.response.writeHead(200, headers);
  // observeGraffiti(res, 100);
}

function sendData(data) {
  this.response.write("data: " + JSON.stringify(data) + "\n\n");
}

// function observeGraffiti(res, count) {
//   sendData(count);
//   if (count)
//     setTimeout(() => observeGraffiti(res, count-1), 1000)
//   else
//     res.end()
// }

/* GET home page. */
router.get('/', observeHandler);

module.exports = router;
module.sendData = sendData;
