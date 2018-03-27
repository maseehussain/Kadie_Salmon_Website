const artWork = require('../models/artWork');

function artWorkIndex(req, res, next) {
  artWork
    .find()
    .exec()
    .then(artWorks => res.json(artWorks))
    .catch(next);
}

functin artWorkShow(req, res, next) {
  artWork
    .findByID(req.params.id)
    .populate('admin')
    .exec()
    .then((artWork) => {
      res.json(artWork);
    })
    .catch(next);
}

module.exports = {
  index: artWorkIndex,
  show: artWorkShow
};
