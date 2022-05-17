const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')
const Student = require('../../models/AA_models/student')
let group = require("../../models/AA_models/student-group");

// @url           POST/studentgroup/add
// @description   add research groups to the student profile
router.post("/add/:id", auth, async (req, res) => {
    const student_id = req.params.id
    const groupId = req.params.id
    try {
      const group1 = await group.findById(groupId)

      if (!group1) {
        throw new Error('There is no group..!!!')
      }
      
      const student = await Student.findById(req.Std._id)
      if (!student) {
        throw new Error('There is no user')
      }
  

      let student_groupItem = {
        // student_id: student_id,
        member1_name: student.member1_name,
        member2_name: student.member2_name,
        member3_name: student.member3_name,
        member4_name: student.member4_name,
        member1_student_id: student.member1_student_id,
        member2_student_id: student.member2_student_id,
        member3_student_id: student.member3_student_id,
        member4_student_id: student.member4_student_id,
        member1_phone: student.member1_phone,
        member2_phone: student.member2_phone,
        member3_phone: student.member3_phone,
        member4_phone: student.member4_phone,
        member1_email: student.member1_email,
        member2_email: student.member2_email,
        member3_email: student.member3_email,
        member4_email: student.member4_email
      };
  
      await group.findOneAndUpdate(
        { _id: req.Std._id },
        { $push: { student_group: student_groupItem } },
        { new: true, upsert: true }
      )
      res.status(200).send({ status: "Student Group Added", student_group: student_groupItem });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  });

// @url           GET/studentgroup/display
// @description   retrieve student groups
router.get("/display", auth, async (req, res) => {
    try {
      const student = await Student.findById(req.Std._id)
      if (!student) {
        throw new Error('There is no user')
      }
      res.status(200).send({ status: "student group retrieved", student_group: req.Std.student_group});
    } catch (error) {
      res.status(500).send({ status: "Error with /all", error: error.message });
    }
  });
  

  module.exports = router;