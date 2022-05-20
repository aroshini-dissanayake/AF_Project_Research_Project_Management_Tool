const mongoose = require('mongoose');

const groupAssignmentSchema = new mongoose.Schema({
    
    groupAssignment_name:{
        type: String,
        required:true,
    },

    uploadAssignment:{
        type: String,
        required:true,
    }

});

const GroupAssignment = mongoose.model("groupassignment",groupAssignmentSchema);
module.exports = GroupAssignment;