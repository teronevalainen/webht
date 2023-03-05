const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Snippet model for saving snippets data to the database
let SnippetSchema = new Schema({
    username: { type: String },
    title: { type: String },
    text: { type: String },
    code: { type: String }

});

module.exports = mongoose.model("Snippet", SnippetSchema);