const mongoose = require('mongoose');

const studentgroupsSchema = new mongoose.Schema({
   
    studentName :{
        type: String,
        required:true,
    },

    groupName:{
        type: String,
        required:true,
    },

    panelMember:{
        type: String,
        required:true,
    }
});

const Studentgroup = mongoose.model("studentgroups",studentgroupsSchema);
module.exports = Studentgroup;