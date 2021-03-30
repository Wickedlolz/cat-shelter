const { Router } = require('express');
const catService = require('../services/catService');
const breedService = require('../services/breedService');

const router = Router();

router.get('/', (req, res) => {
    let breeds = breedService.getAll()
        .then((breeds) => {
            res.render('addCat', { breeds });
        }).catch(() => res.status(500).end());
});

router.post('/', (req, res) => {
    catService.create(req.body)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end());
});

module.exports = router;