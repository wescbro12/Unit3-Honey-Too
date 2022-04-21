const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    title: String,
    entry: String,
    tools: [{ type: mongoose.Schema.ObjectId, ref: "Tool" }]
});


module.exports = mongoose.model('Project', projectSchema);