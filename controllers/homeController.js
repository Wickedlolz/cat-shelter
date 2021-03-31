const { Router } = require('express');
const catService = require('../services/catService');
const breedService = require('../services/breedService');

const router = Router();

router.get('/', (req, res) => {
    let cats = catService.getAll(req.query)
        .then((cats) => {
            res.render('home', { cats });
        }).catch(() => res.status(500).end());
});

router.get('/editCat/:catId', async (req, res) => {
    let cat = await catService.getOneWithId(req.params.catId);
    let breeds = await breedService.getAll();

    res.render('editCat', { cat, breeds });
});

router.post('/editCat/:catId', (req, res) => {
    catService.updateCat(req.params.catId, req.body)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end());
});

router.get('/catShelter/:catId', async (req, res) => {
    let cat = await catService.getOneWithId(req.params.catId);
    res.render('catShelter', { cat });
});

router.post('/catShelter/:catId', (req, res) => {
    catService.deleteCat(req.params.catId)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end());
});

module.exports = router;