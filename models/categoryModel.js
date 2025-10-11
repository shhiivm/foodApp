const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title:{
    type:String,
    required:'Category title is required',
  },
  imageUrl:{
    type:String,
    default: 'myimgurl.jpeg'
  }

}, {timestamps:true});

module.exports = mongoose.model('category', categorySchema);