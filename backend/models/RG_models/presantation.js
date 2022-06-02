const mongoose = require('mongoose');

const presantationpdfSchema = new mongoose.Schema({
    
    presantationpdfupload:{
        type: String,
        required:true,
    },
<<<<<<< HEAD
    
=======
>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
    docName:{
        type: String,
          required: true
      }

});

const Presantationpdf = mongoose.model("presantationpdf",presantationpdfSchema);
module.exports = Presantationpdf;