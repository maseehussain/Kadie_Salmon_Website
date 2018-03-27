const artWork = require('../models/artWork');

function artWorkIndex(req, res, next) {
  artWork
    .find()
    .exec()
    .then(artWorks => res.json(artWorks))
    .catch(next);
}
