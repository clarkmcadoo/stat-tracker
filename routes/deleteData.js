const express = require("express");
const deleteData = express.Router();
const Activity = require("../models/Activity");


deleteData.delete("/activities/:id", (req, res)=>{
   

  Activity.remove({_id: req.params.id})
    .then(foundActivity => {
      res.send(foundActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
})

module.exports = deleteData;
