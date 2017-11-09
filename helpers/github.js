const request = require('request');
const config = require('../config.js');

let getReposByUsername = (handle) => {
  console.log('search is running');
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
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

// getReposByUsername('andrewchen44');

module.exports.getReposByUsername = getReposByUsername;