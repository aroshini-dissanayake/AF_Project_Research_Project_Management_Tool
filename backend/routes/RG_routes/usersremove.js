const express = require ('express');
const router = express.Router();
let staff = require('../../models/SS_models/staff');


//Get panel member Details

router.get("/getpanelmember",async(req,res)=>{
  try{
  const panelmember = await staff.find({
  role: "Panel Memeber" 
  })
  res.status(201)
  .send({
  status : "Panel Member Retrive",
  panelmember:panelmember
  });
  }catch(error){
  console.log(error.message);
  res.status(500)
  .send({error:error.message});
  }
  })


//Delete pannel members details

router.route('/panelmemberdelete/:panelmemberID').delete((req,res)=>{
    staff.findByIdAndRemove(req.params.panelmemberID).exec((err,deletestaff)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deletestaff
        });
    });
 });


//Get supervisor Details

router.get("/getsupervisor",async(req,res)=>{
    try{
    const supervisor = await staff.find({
    role: "Supervisor" 
    })
    res.status(201)
    .send({
    status : "Supervisor Retrive",
    supervisor:supervisor
    });
    }catch(error){
    console.log(error.message);
    res.status(500)
    .send({error:error.message});
    }
    })

//Delete Supervisor details

router.route('/supervisordelete/:supervisorID').delete((req,res)=>{
    staff.findByIdAndRemove(req.params.supervisorID).exec((err,deletesupervisor)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deletesupervisor
        });
    });
 });


//Get Co-Supervisor Details

router.get("/getcosupervisor",async(req,res)=>{
    try{
    const cosupervisor = await staff.find({
    role: "Cosupervisor" 
    })
    res.status(201)
    .send({
    status : "Cosupervisor Retrive",
    cosupervisor:cosupervisor
    });
    }catch(error){
    console.log(error.message);
    res.status(500)
    .send({error:error.message});
    }
    })


 
  module.exports = router;