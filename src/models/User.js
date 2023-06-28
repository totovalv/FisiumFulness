const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ObjectId = mongoose.Types.ObjectId;

const User = new Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  email: {
    type: String,
    unique: true
  },
  // password: {
  //   type: String,
  // },
  // username: {
  //   type: String,
  // },
  // available: {
  //   type: Boolean,
  //   default: true,
  // },
  // role:{
  //   type:String,
  //   default:"user"
  // },
  // token: {
  //   type: String,
  //   default: ""
  // },
  // confirm: {
  //   type: Boolean,
  //   default: false, 
  // },
  // phone:{
  //   type:String
  // },

});



module.exports = model("User", User);

