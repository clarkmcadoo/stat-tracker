const express = require("express");
const postData = express.Router();
const Activity = require("../models/Activity");


postData.post("/activities", (req, res)=>{
    var userInformation = req.body.activity;
    var newActivity = new Activity(userInformation);

    newActivity
    .save()
    .then(savedActivity => {
        return res.send(savedActivity);
    
})
    .catch(err =>{
        res.status(500).send(err);
    });

})

module.exports = postData;
