const express = require('express');
const createmarking = require('../../models/RG_models/createmarking');

const router = express.Router();

//create createmarking

router.post('/save',(req,res)=>{
      let newcreatemarking = new createmarking(req.body);
      newcreatemarking.save((err) => {
           if(err){
               return res.status(400).json({
                  error:err
           });
      }
           return res.status(200).json({
                 success:"Create marking scehmes saved successfully"

           });
      });
});

//get createmarking

router.route('/createmarking').get((req,res) =>{
      createmarking.find().exec((err,createmarking) =>{
          
          if(err){
              return res.status(400),json({
                  error:err
              });
          }
          
          return res.status(200).json({
              success:true,
              existingcreatemarking:createmarking
          });
      
      });
  });

  //update createmarking

router.route('/update/:createmarkingID').put((req,res)=>{
    createmarking.findByIdAndUpdate(
        req.params.createmarkingID,{
            $set:req.body
        },
        (err,createmarking)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });

    //Delete createmarking
router.route('/delete/:createmarkingID').delete((req,res)=>{
    createmarking.findByIdAndRemove(req.params.createmarkingID).exec((err,deletecreatemarking)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deletecreatemarking
        });
    });
 });

 //get specific data

 router.route('/specific/:createmarkingID').get((req,res)=>{
      let createmarkingID = req.params.createmarkingID;
      createmarking.findById(createmarkingID,(err,createmarking)=>{

        if(err) {
            return res.status(400).json({success:false, err})
       
       }
       return res.status(200).json({
       success:true,createmarking,
        });

     });
 });
 
module.exports = router;


