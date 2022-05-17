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
        required:false,
    }
});

const Studentgroup = mongoose.model("studentgroups",studentgroupsSchema);
module.exports = Studentgroup;