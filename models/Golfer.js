var mongoose = require('mongoose');

var GolferSchema = new mongoose.Schema({
  name:String,
  rounds:{
    course:String,
    hole1:String,
    hole2:String

  }
});

module.exports = mongoose.model('Golfer', GolferSchema);
