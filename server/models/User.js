const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User model for saving user data to the database
let userSchema = new Schema({
    email: { type: String },
    username: { type: String },
    password: { type: String }
});

module.exports = mongoose.model("Users", userSchema);