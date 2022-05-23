const express = require("express");
const StdDocument = require('../../models/IS_models/stdDocuments');
const Student = require("../../models/AA_models/student");
const auth = require("../../middleware/auth");

const router = express.Router();

//create student documents
// router.post("/submitdoc", (req, res) => {
//     let newstdDocument= new StdDocument(req.body);
//     newstdDocument.save((err) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
//       return res.status(200).json({
//         success: "Document Upload Successfully !!!",
//       });
//     });
//   });


//new


  router.post("/submitdoc", auth, async (req, res) => {
     try{
      let studentId = req.Std._id
      const student = await Student.findById(studentId)
      if (!student) {
        throw new Error('There is no student')
     }

     const {docUpload} = req.body;

     const dbDoc = {
      docUpload: docUpload,
      studentID: studentId,
      studentName: req.Std.name,
      stdId: req.Std.student_id
     };

    let newstdDocument= new StdDocument(dbDoc);
    await newstdDocument.save();
      res.status(200).send({ status: "Document Upload Successfully !!!", stddocuments: newstdDocument });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  });

  module.exports = router;