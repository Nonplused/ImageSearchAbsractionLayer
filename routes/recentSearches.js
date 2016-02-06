var express = require('express');
var router = express.Router();
var config = require('konfig')();
var fs = require('fs');


router.get('/', function(req, res) {
  fs.readFile(config.app.searchList, function(err, data) {
    if (err) console.error(err);
    res.send(JSON.parse(data));
  });
});

module.exports = router;