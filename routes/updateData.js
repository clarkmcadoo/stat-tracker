const express = require("express");
const updateData = express.Router();
const Activity = require("../models/Activity");

updateData.put("/activities/:id", (req, res)=>{

    Activity.updateOne({_id: req.params.id}, req.body)
    .then(foundActivity => {
      res.send(foundActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
})



module.exports = updateData;