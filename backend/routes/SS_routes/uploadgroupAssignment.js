const express = require("express");
const GroupAssignment = require('../../models/SS_models/GroupAssignment')

const router = express.Router();

// create student groups
router.post("/assignmentgroups/save", (req, res) => {
  let newgroupAssignment= new GroupAssignment(req.body);
  newgroupAssignment.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Group Assignment Upload Successfully !!!",
    });
  });
});

module.exports = router;