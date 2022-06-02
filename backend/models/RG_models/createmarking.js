const mongoose = require('mongoose');

const createmarkingSchema = new mongoose.Schema({

<<<<<<< HEAD
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
=======
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
    required:true,
},

marks:{
    type : String,
    required:true,
},

>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
});

module.exports = mongoose.model('Createmarking', createmarkingSchema)

