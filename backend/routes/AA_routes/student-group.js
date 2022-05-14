const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')
const Student = require('../../models/AA_models/student')
let group = require("../../models/AA_models/student-group");

// @url           POST/studentgroup/add
// @description   add research groups to the student profile
router.post("/add/:id", auth, async (req, res) => {
    const student_id = req.params.id
    try {
      const student = await Student.findById(req.Std._id)
      if (!student) {
        throw new Error('There is no user')
      }
  

      let student_groupItem = {
        // student_id: student_id,
        member1: student.member1,
        member2: student.member2,
        member3: student.member3,
        member4: student.member4,
        phone1: student.phone1,
        phone2: student.phone2,
        phone3: student.phone3,
        phone4: student.phone4,
        student_id1: student.student_id1,
        student_id2: student.student_id2,
        student_id3: student.student_id3,
        student_id4: student.student_id4,
        email1: student.email1,
        email2: student.email2,
        email3: student.email3,
        email4: student.email4
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