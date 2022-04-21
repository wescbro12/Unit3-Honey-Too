const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toolSchema = new Schema({
    name: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('Tool', toolSchema)