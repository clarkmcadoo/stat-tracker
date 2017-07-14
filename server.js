const express = require("express");
const bodyParser = require("body-parser");
const dbUrl = 'mongodb://localhost/27017/stat-tracker';
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const User = require("./models/User");
const app = express();

const getUserData = require("./routes/getUserData");
const postData = require("./routes/postData");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", getUserData);
app.use("/api", postData);



mongoose.connect(dbUrl).then(function(err, db) {
  if (err) {
    console.log("error", err);
  }
  console.log("Connected to MOONGOOSE DB.");
}); 

app.listen(9001, function(){
    console.log("Stat tracker is running on port 9001");
});