const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook"
var mongoURL = process.env.MONGODB_URL
console.log(mongoURL);
const connectToMongo = async () => {
  mongoose.connect(mongoURL).then(() => console.log("Connected")).catch((e) => console.log(e.message));
}
module.exports = connectToMongo;