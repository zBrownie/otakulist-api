const mongoose = require('mongoose')


const AnimeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        createIndexes: { unique: true }
    },
    link: {
        type: String,
        required: true,
        createIndexes: { unique: true }
    },
    link2: {
        type: String,
        required: true,
        createIndexes: { unique: true }
    },
    pos: {
        type: Number,
        required: true
    },
    dia: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    streaming: {
        type: Boolean,
        required: true
    },
    img_url: {
        type: String,
        required: true,
        createIndexes: { unique: true }
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Animes", AnimeSchema)