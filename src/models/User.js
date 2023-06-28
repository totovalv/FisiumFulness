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

firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  // password: {
  //   type: String,
  // },
  username: {
    type: String,
  },
 
  role:{
    type:String,
    default:"user"
  },
  // token: {
  //   type: String,
  //   default: ""
  // },
  // confirm: {
  //   type: Boolean,
  //   default: false, 
  // },
  phone:{
    type:String
  },

},{ timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' } });



module.exports = model("User", User);

