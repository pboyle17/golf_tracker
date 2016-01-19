var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/golf_tracker'

mongoose.connect(connectionString);

mongoose.connection.on('connected',function(){
  console.log('connected to the database!');
});

mongoose.connection.on('disconnected',function(){
  console.log('disconnected from the database');
});

mongoose.connection.on('error',function(err){
  console.log(err);
});
