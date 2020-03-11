const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      createIndexes: { unique: true }
    },
    favorites: [String],
    password: {
      type: String,
      required: true,
      select: true
    },
    img_url: String,
    admin: Boolean
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("User", UserSchema);
