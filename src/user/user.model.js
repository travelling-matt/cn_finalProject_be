const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: false
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
