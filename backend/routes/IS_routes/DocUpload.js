const express = require("express");
const StdDocument = require('../../models/IS_models/stdDocuments');
const Student = require("../../models/AA_models/student");
const auth = require("../../middleware/auth");

const router = express.Router();

//new
  router.post("/submitdoc", auth, async (req, res) => {
     try{
      let studentId = req.Std._id
      const student = await Student.findById(studentId)
<<<<<<< HEAD
     
=======
      
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
      if (!student) {
        throw new Error('There is no student')
     }

     const {docUpload,stdDocName} = req.body;

     const dbDoc = {
      docUpload: docUpload,
      stdDocName:stdDocName,
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


//get pdf 
router.get("/pdfdisplay",async (req, res) => {
  const pdf = await StdDocument.find();
  try {
    res.json(pdf)
  } catch (error) {
    res.status(500)
    res.send({ status: "Error with PDF Fetched", error: error.message });
  }
});


module.exports = router;