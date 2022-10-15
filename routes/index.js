var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: 'A.Dharshana',
    email:'dharshanaa@anjaconline.org',
    contact:'6383717374',
    fathername:'R.Alagarsamy',
    dob:'23/01/2001',
    age:'21',
    bloodGroup:'A2B+'
  });
});

module.exports = router;
