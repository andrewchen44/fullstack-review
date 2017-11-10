const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (handle) => {
  let options = {
    url: `https://api.github.com/users/${handle}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(err, res, body){
    var data = (JSON.parse(body));
    for (var i = 0; i < data.length; i++) {
      db.save(data[i].html_url);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;