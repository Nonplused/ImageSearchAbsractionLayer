//depen 
var express = require('express');
var config = require('konfig')();

//express
var app = express();

//routes

//start server
app.listen(config.app.port, function () {
  console.log("server is listening on port: " + config.app.port);
});