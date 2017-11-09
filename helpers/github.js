const request = require('request');
const config = require('../config.js');

let getReposByUsername = (handle) => {
  console.log('search ran');
  let options = {
    url: `https://api.github.com/users/${handle}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function(err, res, body){
    if(err) {console.log('there is an error', err)}
    console.log('data', JSON.parse(body));
  })
}

module.exports.getReposByUsername = getReposByUsername;