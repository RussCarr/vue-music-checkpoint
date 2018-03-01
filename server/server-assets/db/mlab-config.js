var mongoose = require("mongoose");
var connectionString = "mongodb://student:studentpass@ds012538.mlab.com:12538/music-vue";

var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on("error", err => {
  console.error("mlab Error: ", err);
});

connection.once("open", () => {
  console.log("connected to database");
});