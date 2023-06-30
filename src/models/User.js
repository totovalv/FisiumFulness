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
    unique: true,
    required:true

  },

firstname: {
    type: String,
    default: "",
    required:true

  },
  lastname: {
    type: String,
    default: "",
    required:true

  },
  status: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required:true
  },
  username: {
    type: String,
    unique: true,
    required:true
  },
 
  role:{
    type:String,
    default:"user"
  },
  token: {
    type: String,
    default: ""
  },
  confirm: {
    type: Boolean,
    default: false, 
  },
  phone:{
    type:String,
    default: ""

  },

},{ timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } });



module.exports = model("User", User);

