const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  author: String,
  title: String,
  price: Number,
});

module.exports = mongoose.model('Book', bookSchema);