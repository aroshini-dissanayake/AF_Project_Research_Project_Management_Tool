const express = require('express');
const createmarking = require('../../models/RG_models/createmarking');

const router = express.Router();

//save createmarking

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

module.exports = router;


