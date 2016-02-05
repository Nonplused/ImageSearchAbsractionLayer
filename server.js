//depen 
var express = require('express');
var config = require('konfig')();

//express
var app = express();

//api 


//routes
app.use('/searchimages', require('./routes/searchImages.js'))

//start server
app.listen(config.app.port, function () {
  console.log("server is listening on port: " + config.app.port);
});