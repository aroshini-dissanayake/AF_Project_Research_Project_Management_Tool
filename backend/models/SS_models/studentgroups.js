const mongoose = require('mongoose');

const studentgroupsSchema = new mongoose.Schema({

    group_name:{
        type: String,
        required:false,
    },

    panelMember:{
        type: String,
        required:false,
    },
    topicstatus:{
        type: String,
        required:false,
    }
});

const Studentgroup = mongoose.model("studentgroups",studentgroupsSchema);
module.exports = Studentgroup;