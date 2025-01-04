const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook"
const mongoURI = "mongodb+srv://arghjain1234:arghjain1234@inotebook.3oe1f.mongodb.net/Inotebook?retryWrites=true&w=majority&appName=Inotebook"

const connectToMongo = async () => {
  mongoose.connect(mongoURI).then(() => console.log("Connected")).catch((e) => console.log(e.message));
}
module.exports = connectToMongo;