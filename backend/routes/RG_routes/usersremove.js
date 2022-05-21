const express = require ('express');
const router = express.Router();
let staff = require('../../models/SS_models/staff');


// router.get("/getpanelmember",async(req,res)=>{
//   try{
//   const panelmember = await staff.find({
//   role: "Panel Memeber"
//   })
//   res.status(201)
//   .send({
//   status : "Panel Member Retrive",
//   panelmember:panelmember
//   });
//   }catch(error){
//   console.log(error.message);
//   res.status(500)
//   .send({error:error.message});
//   }
//   });

//Get panel members details
// router.get("/getpanelmember",async(req,res)=>{
//     try{
//       const panelmember = await staff.find(
//         {role: "Panel Member"
//       })
//   res.status(201)
//   .send({
//     status : " Panel Member Retrive",
//     panelmember:panelmember});
//   }catch(error)
//   {console.log(error.message);
//     res.status(500)
//     .send({error:error.message});
//   }});

//     //Delete pannel members details
// router.route('/panelmemberdelete/:panelmemberID').delete((req,res)=>{
//     staff.findByIdAndRemove(req.params.panelmemberID).exec((err,deletestaff)=>{
        
//         if(err) return res.status(400).json({
//             message: "Delete Unsuccessfully",err
//         });
       
//         return res.json({
//             message: "Delete Successfull",deletestaff
//         });
//     });
//  });
 
  module.exports = router;