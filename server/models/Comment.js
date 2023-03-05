const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User model for saving user data to the database
let commentSchema = new Schema({
    commentID: { type: String },
    commentText: { type: String }
});

module.exports = mongoose.model("Comment", commentSchema);