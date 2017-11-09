const mongoose = require('mongoose');
var option = {
  server: {
    socketOptions: {
      keepAlive: 30000000000,
      connectTimeoutMS: 3000000000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 30000000000,
      connectTimeoutMS: 300000000
    }
  }
};
mongoose.connect('mongodb://127.0.0.1/fetcher', option);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('database running');
  let repoSchema = mongoose.Schema({
    users: String
  });

  let Repo = mongoose.model("Repo", repoSchema);
  let myRepo = new Repo({users: 'Victor'});

  myRepo.save();
});



let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;

//to start
//"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

//to connect
//"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"

//to end
//control c