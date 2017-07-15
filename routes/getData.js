const express = require("express");
const getData = express.Router();
const Activity = require("../models/Activity");


getData.get("/activities", (req, res)=>{

    Activity.find()
    .then(foundActivity => {
      res.send(foundActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
})

getData.get("/activities/:id", (req, res)=>{

    var placement = req.params.id - 1;

    Activity.find()
    .then(foundActivity => {
      res.send(foundActivity[placement]);
    })
    .catch(err => {
      res.status(500).send(err);
    });
})

module.exports = getData;
