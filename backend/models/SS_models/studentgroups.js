const mongoose = require('mongoose');
const studentgroupsSchema = new mongoose.Schema({

    group_name:{
        type: String,
        required:true,
    },

    panelMember:{
        type: String,
        required:false,
    },
<<<<<<< HEAD
    
=======

>>>>>>> 12308ea2e9a8145d9e028563e21353ef8a9dc48b
    topicstatus:{
        type: String,
        required:false,
    },

    supervisortopicstatus:{
        type: String,
        required:false,
    },

    cosupervisortopicstatus:{
        type: String,
        required:false,
    },

    feedback:{
        type: String,
        required:false,
    },

});

const Studentgroup = mongoose.model("studentgroups",studentgroupsSchema);
module.exports = Studentgroup;