const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Mongooo Connected!!!");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
