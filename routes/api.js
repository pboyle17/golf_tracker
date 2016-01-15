var express = require('express');
var router = express.Router();
var fs = require('fs');
var obj={};

fs.readFile('strokes_gained.json',function(err,data){
  if(err){
    console.log(err);
  } else {
    obj=JSON.parse(data);
    console.dir(obj);
  }
});

router.get('/',function(req,res){
  res.send(obj);
});

module.exports = router;
