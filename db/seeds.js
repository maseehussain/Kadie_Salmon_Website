const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const artWork = require('../models/artWork');

mongoose
  .connect(dbURI, { useMongoCLient: true })
  .then(db => db.dropDatabase())
