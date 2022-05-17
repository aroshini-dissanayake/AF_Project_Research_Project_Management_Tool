const express = require("express");
//const Researchtopics = require("../../models/IS_models/researchtopic");
const router = express.Router();
const auth = require("../../middleware/auth");
let student = require("../../models/AA_models/student");
let studentGroup = require("../../models/AA_models/student-group");



//register researchtopic

router.post("/addResearchTopic", auth, async (req, res) => {

  try {
     const currentStudent = await student.findById(req.Std._id)
      //const currentGroupId = await currentStudent.grp_id;
      const Group = await studentGroup.findById(currentStudent.grp_id);

     if (!currentStudent) {
      throw new Error('There is no Student')
    }

    if (!Group) {
      throw new Error('You are not registered in a group...!')
    }
    
    const {researchTopic, researchField, } = req.body;

    const dbResearchtopic = {
      researchTopic: researchTopic,
      researchField: researchField,
    };

    const newResearchtopic = new studentGroup(dbResearchtopic);
    await newResearchtopic.save();
    //res.status(200).send({ status: "New Research Topic created", studentGroup:newResearchtopic });
    return res.status(200).json({
      success:true,
      id: newResearchtopic._id
    }) ; 
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: error.message });
  }
});









// //register research topic
// router.post("/addresearchtopic/save",(req, res) => {
//     let newResearchtopics = new Researchtopics(req.body);
//     newResearchtopics.save((err) => {
//       if(err) {
//         return res.status(400).json({
//           error: err,
//        });
//      }
//      return res.status(200).json({
//        success: "Student Group create successfully !!!",
//        });
//     });
//   });

//   //get research topic
// router.route("/displayresearchtopic").get((req, res) => {
//   Researchtopics.find().exec((err, researchtopics) => {
//    if (err) {
//    return res.status(400).json({
//    error: err,
//     });
//   }
//    return res.status(200).json({
//      success: true,
//      existingResearchtopics: researchtopics,
//     });
//   });
//  });

//   //update research topics 
//   router.route('/update/:groupId').put((req,res) =>{
//     Researchtopics.findByIdAndUpdate(
//         req.params.groupId,{
//             $set:req.body
//         },
//         (err,researchtopic)=>{
           
//             if(err){
//                 return res.status(400).json({error:err});
//             }
            
//             return res.status(200).json({
//                 success: "Update Successfully"
//             });
//         });
//     });

     module.exports = router;  