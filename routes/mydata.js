var express = require('express');
var router = express.Router();

/* GET MyData page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jyothsna Chaparala' });
});

module.exports = router;
