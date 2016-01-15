var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',function(req,res){
  res.render('login');
});

router.get('/sign_up',function(req,res){
  res.render('sign_up');
});

module.exports = router;
