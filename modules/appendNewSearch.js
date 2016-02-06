var fs = require('fs');

function appendNewSearch(newSearch, filePath, callback) {
  var newJSON = {};
  newJSON[0] = newSearch;
  fs.readFile(filePath, function(err, data){
    if (err) callback(err);
    var recent = JSON.parse(data);
    for (var i = 0; i < 9; i++) {
    newJSON[i+1] = recent[i] ? recent[i] : ""; 
    }
    fs.writeFile(filePath, JSON.stringify(newJSON), function(err) {
      if (err) callback(err);
      callback(null, newJSON);
    });
  });
}

module.exports = appendNewSearch;