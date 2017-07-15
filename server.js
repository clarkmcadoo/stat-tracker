const express = require("express");
const bodyParser = require("body-parser");
const dbUrl = 'mongodb://localhost:27017/stat-tracker';
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Activity = require("./models/Activity");
const app = express();
const checkAuth = require("./checkAuth");

const getData = require("./routes/getData");
const postData = require("./routes/postData");
const updateData = require("./routes/updateData");
const deleteData = require("./routes/deleteData");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api",checkAuth, getData);
app.use("/api",checkAuth, postData);
app.use("/api",checkAuth, updateData);
app.use("/api",checkAuth, deleteData);


mongoose.connect(dbUrl).then(function(err, db) {
  if (err) {
    console.log("error", err);
  }
  console.log("Connected to MOONGOOSE DB.");
}); 

app.listen(9001, function(){
    console.log("Stat tracker is running on port 9001");
});