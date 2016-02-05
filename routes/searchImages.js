var express = require('express');
var config = require('konfig')();
var http = require('https');
var router = express.Router();

var url = 'https://www.googleapis.com/customsearch/v1?key=' + config.app.apiKey + '&cx=' + config.app.searchId + '&searchType=image';


router.get('/:sTerm', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  
  var searchTerm = "&q=" + req.params.sTerm,
      offset = "&start=" + (req.query.offset || 1);
  http.get(url + searchTerm + offset, function(apiRes) {
    var test = ''; 
    apiRes.on('data', function(chunk) {
        test += chunk;
    });
    apiRes.on('end', function() {
      var result = JSON.parse(test).items.map(function(elm) {
        return {
                "link": elm.link,
                "altText": elm.snippet,
                "page": elm.image.contextLink 
              };
      });
      res.send(result);
    });
  });
});

module.exports = router;