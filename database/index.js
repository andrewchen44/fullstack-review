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

  let repoSchema = mongoose.Schema({
    url: String
  });
  let Repo = mongoose.model("Repo", repoSchema);

let save = (link) => {
  let entry = new Repo({
      url: link
  });
  entry.save();
}

module.exports.save = save;

//to start
//"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

//to connect
//"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"