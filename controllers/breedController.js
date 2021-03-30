const { Router } = require('express');
const breedService = require('../services/breedService');

const router = Router();

router.get('/', (req, res) => {
    res.render('addBreed');
});

router.post('/', (req, res) => {
    breedService.create(req.body).then(() => res.redirect('/')).catch(() => res.status(500).end());
});

module.exports = router;