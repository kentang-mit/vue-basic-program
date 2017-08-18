const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const toDo = new Schema({
  name: String,
  image: String,
  date: String,
  totalTime: Number,
  comment: String, 
  created: Number
});

module.exports = mongoose.model('todo', toDo);