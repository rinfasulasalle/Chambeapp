const mongoose = require("mongoose");
const groupSchema = mongoose.Schema({
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    ],
    title:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require:false
    },
    description:{
        type: String,
        require: false
    },
    status:{
        type:Boolean,
        require: true
    }
});

module.exports = mongoose.model('groups', groupSchema);