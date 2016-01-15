var express = require('express');
var router = express.Router();
var fs = require('fs');
var strokes={};
var putts={};


fs.readFile('strokes_gained.json',function(err,data){
  if(err){
    console.log(err);
  } else {
    strokes=JSON.parse(data);
    console.dir(strokes);
  }
});

fs.readFile('strokes_gained_putting.json',function(err,data){
  if(err){
    console.log(err);
  } else {
    putts=JSON.parse(data);
    console.dir(putts);
  }
});

router.get('/',function(req,res){
  res.render('api');
});

router.get('/strokes',function(req,res){
  res.send(strokes);
});

router.get('/putts',function(req,res){
  res.send(putts);
});

module.exports = router;
