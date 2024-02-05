const { request } = require("express")
const mongoose = require("mongoose")
const {Schema} = mongoose
const Author = require("./Author")

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {type: mongoose.Types.ObjectId, ref: "Author"},
        price: {
            type: Schema.Types.Decimal128,
            required: true
        },
        isbn: {
            type: String,
            required: true
        },
        lang: {
            type: String,
            required: true
        },
        page_number: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
    }
)

module.exports = mongoose.model("Books", bookSchema)