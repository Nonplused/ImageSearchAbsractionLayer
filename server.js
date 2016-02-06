//depen 
var express = require('express');
var config = require('konfig')();

//express
var app = express();

//api 


//routes
app.use('/search', require('./routes/searchImages.js'));
app.use('/recent', require('./routes/recentSearches.js'));

//start server
app.listen(config.app.port, function () {
  console.log("server is listening on port: " + config.app.port);
});