const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    src_image: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);