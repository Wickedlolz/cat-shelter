const { Router } = require('express');
const homeController = require('./controllers/homeController');
const catController = require('./controllers/catController');
const breedController = require('./controllers/breedController');

const router = Router();

router.use('/', homeController);
router.use('/addCat', catController);
router.use('/addBreed', breedController);

module.exports = router;