const express = require('express');
const helper = require('../helpers/github.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var username = '';
  req.on('data', function(data) {
    username += data;
  });
  req.on('end', function() {
    helper.getReposByUsername(username);
  });

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

