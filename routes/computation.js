var express = require('express');
var router = express.Router();

/* GET Computation page. */
router.get('/', function(req, res, next) {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.random();
    var num3 = Math.floor((Math.random() * 30) + 20);
    var num4 = Math.floor((Math.random() * 40) + 30);
    var absFunction = Math.floor(Math.abs(num1));
    var acosFunction = Math.floor(Math.acos(num2));
    var sinFunction = Math.floor(Math.sin(num3));
    var sinhFunction = Math.floor(Math.sinh(num4));
    res.render('computation', 
                { 
                    title: 'Jyothsna Chaparala computing function', 
                    num1: num1,
                    num2: num2,
                    num3: num3,
                    num4: num4,
                    abs: absFunction,
                    acos: acosFunction,
                    sin: sinFunction,
                    sinh: sinhFunction
                });
});

module.exports = router;