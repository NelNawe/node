const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,

    },

    postId: {
        type: mongoose.Schema.Types.ObjectId.Id,
        ref: 'Post',
        required: true,
    },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;