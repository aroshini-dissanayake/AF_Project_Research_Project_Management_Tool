const express = require("express");
const router = require("express").Router();
const Studentgroups = require("../../models/SS_models/studentgroups");

router.post("/accepttopic/:id", async (req, res) => {
    const groupID = req.params.id
    console.log(groupID);
    try{await Studentgroups.findOneAndUpdate(
        {_id:groupID},
        {topicstatus:"Accepted"}
        )
            res.status(200).send({status:"topic accept succesful"})
    }catch (error) {
                res.status(500).send({error: error.message})
                console.log(error)
              }

  });
  

module.exports = router;
