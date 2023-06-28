const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ObjectId = mongoose.Types.ObjectId;

const Blog = new Schema({
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  description:{
    type:String
  },
  title:{
    type:String
  },
  image:{
    type:String
  }
});



module.exports = model("Blog", Blog);


