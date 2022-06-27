const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    mingLength: [3, "Name must be at least 3 characters long"],
    maxLength: [50, "Name must be at most 50 characters long"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    minLength: [3, "Email must be at least 3 characters long"],
    maxLength: [50, "Email must be at most 50 characters long"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password:{
    type:String,
    required: [true, "Please provide password"],
    minLength: [6, "Password must be at least 6 characters long"],
    maxLength: [12, "Password must be at most 12 characters long"],
  }
});

module.exports = mongoose.model('User', UserSchema);
