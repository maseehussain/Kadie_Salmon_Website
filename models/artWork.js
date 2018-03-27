const mongoose = require('mongoose');

const artWorkSchema = mongoose.Schema({
  image: { type: String },
  nameOfWork: { type: String },
  yearCreated: { type: String },
  about: { type: String }
});

module.exports = mongoose.model('Artwork', artWorkSchema);
