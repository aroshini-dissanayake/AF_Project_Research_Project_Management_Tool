const mongoose = require('mongoose');
const researchtopicSchema = new mongoose.Schema({
          researchTopic :{
            type: String,
            required:true,
          
           },
         
          groupName:{
              type: String,
              required:true,
             },
             
          groupId:{ 
               type: String,
               required:true,
        
            }
        });
            
            
const Researchtopic = mongoose.model("researchtopic",researchtopicSchema);module.exports = Researchtopic;

