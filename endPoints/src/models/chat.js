const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({ 
    participantes: {
        type: [String], 
        required: true,
        validate: {
            validator: function(arr) {
                return Array.isArray(arr) && arr.length >= 2;
            }
        }
    },
    content: {
        type: [String],
        required: false
    }
});

module.exports = mongoose.model('Chat',chatSchema); 

