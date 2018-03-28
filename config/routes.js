const router = require('express').Router();
const artWork = require('../controllers/artWorks');

router.route('/artworks')
  .get(artWork.index);
