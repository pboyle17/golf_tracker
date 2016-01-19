var mongoose = require('mongoose');

var GolferSchema = new mongoose.Schema({
  name:String,
});

module.exports = mongoose.model('Golfer', GolferSchema);
