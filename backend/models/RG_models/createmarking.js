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
    required:true,
},

marks:{
    type : String,
    required:true,
},

});

module.exports = mongoose.model('Createmarking', createmarkingSchema)

