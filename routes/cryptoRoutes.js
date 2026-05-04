const express = require('express');
const router = express.Router();
const { getAllCryptos, getTopGainers, getNewCryptos, addCrypto } = require('../controllers/cryptoController');

router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewCryptos);
router.post('/', addCrypto);

module.exports = router;
