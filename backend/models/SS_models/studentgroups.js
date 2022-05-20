const mongoose = require('mongoose');

const studentgroupsSchema = new mongoose.Schema({
   
    studentName :{
        type: String,
        required:false,
    },

    groupName:{
        type: String,
        required:false,
    },

    panelMember:{
        type: String,
        required:false,
    }
});

const Studentgroup = mongoose.model("studentgroups",studentgroupsSchema);
module.exports = Studentgroup;