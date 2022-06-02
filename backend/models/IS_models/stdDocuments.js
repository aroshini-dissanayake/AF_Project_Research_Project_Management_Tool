const mongoose = require('mongoose');
const stdDocumentsSchema = new mongoose.Schema({

    docUpload:{
        type: String,
        required:true,
    },

    studentID:{
        type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "students",
       },

    studentName: {
        type: String,
        required: true
      },
      
    stdId: {
       type: String,
       required: true
    },
    
<<<<<<< HEAD
=======
  
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
    stdDocName:{
      type: String,
      required: true
    }

});

const StdDocuments = mongoose.model("stddocuments",stdDocumentsSchema);
module.exports = StdDocuments;