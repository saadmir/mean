var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({foo: 'bar', baz: 'zee'});
});

module.exports = router;
