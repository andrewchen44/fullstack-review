const express = require('express');
const helper = require('../helpers/github.js')
const db = require('../database/index.js')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  var username = '';
  req.on('data', function(data) {
    username += data;
    helper.getReposByUsername(username);
  });
});

app.get('/repos', function (req, res) {
  console.log('get request on refresh');
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

