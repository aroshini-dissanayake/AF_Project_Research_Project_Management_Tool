const express = require("express");
const Researchtopics = require("../../models/IS_models/researchtopic");

const router = express.Router();

//register research topic
router.post("/addresearchtopic/save",(req, res) => {
    let newResearchtopics = new Researchtopics(req.body);
    newResearchtopics.save((err) => {
      if(err) {
        return res.status(400).json({
          error: err,
       });
     }
     return res.status(200).json({
       success: "Student Group create successfully !!!",
       });
    });
  });

  //get research topic
router.route("/displayresearchtopic").get((req, res) => {
  Researchtopics.find().exec((err, researchtopics) => {
   if (err) {
   return res.status(400).json({
   error: err,
    });
  }
   return res.status(200).json({
     success: true,
     existingResearchtopics: researchtopics,
    });
  });
 });

  //update research topics 
  router.route('/update/:groupId').put((req,res) =>{
    Researchtopics.findByIdAndUpdate(
        req.params.groupId,{
            $set:req.body
        },
        (err,researchtopic)=>{
           
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });

     module.exports = router;  