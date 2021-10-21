var express = require('express');
var router = express.Router();

/* GET users listing. */
router.delete('/', function(req, res, next) {
  console.log(req.body);
  res.json({ response: 'res' });
});

module.exports = router;
