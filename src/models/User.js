const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        createIndexes: { unique: true }
    },
    favorites: [String],
    password: {
        type: String,
        required: true
    },
    img_url: String,
    admin: Boolean
}, {
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema)