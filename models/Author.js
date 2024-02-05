const mongoose = require("mongoose")
const {Schema} = mongoose
const {Books} = require('./Book');

const authorSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required:true,
        },
        birth_date: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("Authors", authorSchema)
//module.exports.authorSchema = authorSchema; // Named export
