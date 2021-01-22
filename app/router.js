const express = require ('express');
const diegeseController = require('./controllers/diegeseController');

const router = express.Router();

router.get('/', diegeseController.homepage);

module.exports = router;