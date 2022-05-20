const express = require("express");
const stdgroups = require("../../models/IS_models/stdgroups");
const router = express.Router();
 
//add reserch topic to student groups
router.post("/research/:id", async (req, res) => {
   const groupId2 = req.params.id;
   try {
     const group2 = await stdgroups.findById(groupId2);
     if (!group2) {
       throw new Error("There is no group..!!!");
     }
     const reserch_topic = req.body.researchTopic;
     const research_Field = req.body.researchField;
 
     group2.researchTopic = reserch_topic;
     group2.researchField = research_Field;
     await group2.save();
      return res.status(200).json({
       success: true,
       Studentgroups: group2,
     });
   } catch (error) {
     res.status(500).send({ status: "error", error: error.message });
   }
 });

 //delete researchtopic

 router.delete("/delete/:id", async (req, res) => {
    const groupId2 = req.params.id;
    try {
      const group2 = await stdgroups.findById(groupId2);
      if (!group2) {
        throw new Error("There is no group..!!!");
      }
      const reserch_topic = req.body.researchTopic;
      group2.researchTopic = reserch_topic;
      await group2.save();
    
      return res.status(200).json({
        success: true,
        Studentgroups: group2,
      });
    } catch (error) {
      res.status(500).send({ status: "error", error: error.message });
    }
   });

//get research topic details
router.route("/displayresearchtopics").get((req, res) => {
  stdgroups.find().exec((err, stdgroups) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingstdgroups: stdgroups,
    });
  });
 });


 //get a specific research topic
router.route("/displayresearchtopics/:id").get((req, res) => {
  let groupID = req.params.id;
  stdgroups.findById(groupID, (err,  stdgroups) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
  
      });
    }
    return res.status(200).json({
      success: true,
      stdgroups,
    });
  });
 });

  module.exports = router;





  

