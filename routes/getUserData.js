const express = require("express");
const getUserData = express.Router();
const User = require("../models/User");


getUserData.get("/activities", (req, res)=>{

    res.send("this page is working!");

})

module.exports = getUserData;
