const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const ArtWork = require('../models/artWork');

mongoose
  .connect(dbURI, { useMongoCLient: true })
  .then(db => db.dropDatabase())
  .then(() => {
    return ArtWork.create([
      {
        image: '',
        nameOfWork: '',
        material: '',
        yearCreated: ''
      },
    ])
  })
  .then(artworks => console.log(`${artworks.length} art work created`))
