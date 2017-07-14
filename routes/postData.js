const express = require("express");
const postData = express.Router();
const User = require("../models/User");


postData.post("/activities", (req, res)=>{
    var userInformation = req.body;

    

    res.send(userInformation);



})

module.exports = postData;
