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
  db.pull().then ((docs) => {
    console.log(docs);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

