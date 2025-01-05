const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook"
const mongoURI = process.env.MONGODB_URL

const connectToMongo = async () => {
  mongoose.connect(mongoURI).then(() => console.log("Connected")).catch((e) => console.log(e.message));
}
module.exports = connectToMongo;