const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const ArtWork = require('../models/artWork');

mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase();

  const artWorksData = [{
    image: 'https://static.wixstatic.com/media/5b517d_10820e2e44c54888a7193a3416a22540~mv2.jpg/v1/fill/w_801,h_1132,al_c,q_90,usm_0.66_1.00_0.01/5b517d_10820e2e44c54888a7193a3416a22540~mv2.webp',
    nameOfWork: 'Blue Grey(Sula) ',
    material: 'Hand painted black and white photograph',
    yearCreated: '2016'
  }];

  ArtWork
    .create(artWorksData)
    .then(artworks => console.log(`${artworks.length} art work created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
