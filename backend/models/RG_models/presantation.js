const mongoose = require('mongoose');

const presantationpdfSchema = new mongoose.Schema({
    
    presantationpdfupload:{
        type: String,
        required:true,
    },
<<<<<<< HEAD
    
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
    docName:{
        type: String,
          required: true
      }

});

const Presantationpdf = mongoose.model("presantationpdf",presantationpdfSchema);
module.exports = Presantationpdf;