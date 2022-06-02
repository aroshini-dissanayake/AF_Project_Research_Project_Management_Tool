const mongoose = require('mongoose');

const createmarkingSchema = new mongoose.Schema({

    criteria:{
        type : String,
        required:true,
    },
    
    good:{
        type : String,
        required:true,
    },
    
    avarage:{
        type : String,
        required:true,
    },
    poor:{
        type : String,
        required:true,
    },
    
    comment:{
        type : String,
        required:false,
    },
    
    marks:{
        type : String,
        required:false,
    },
<<<<<<< HEAD
=======

>>>>>>> d0a5cd10221efd4bd374f942d0eda83b42d67a32
});

module.exports = mongoose.model('Createmarking', createmarkingSchema)

