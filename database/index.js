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
  url: String,
  createdAt: Date
});

let Repo = mongoose.model("Repo", repoSchema);

let save = (link) => {
  var query = Repo.find({url: link});
  query.then(function(doc){
    if(!doc.length) {
        let entry = new Repo({ 
          url: link,
          createdAt: new Date ()
        });
    entry.save();
    }
  });
}

let pull = () => {
  return Repo.find({}).sort({ createdAt: -1 });
}

module.exports.pull = pull;
module.exports.save = save;

//to start
//"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

//to connect
//"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"