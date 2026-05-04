const Crypto = require('../models/Crypto');

exports.getAllCryptos = async (req, res) => {
    try {
        const cryptos = await Crypto.find({});
        res.json(cryptos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getTopGainers = async (req, res) => {
    try {
        // Sort by change24h descending
        const cryptos = await Crypto.find({}).sort({ change24h: -1 }).limit(10);
        res.json(cryptos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getNewCryptos = async (req, res) => {
    try {
        // Sort by createdAt descending
        const cryptos = await Crypto.find({}).sort({ createdAt: -1 }).limit(10);
        res.json(cryptos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.addCrypto = async (req, res) => {
    try {
        const { name, symbol, price, image, change24h } = req.body;

        const cryptoExists = await Crypto.findOne({ symbol });
        if (cryptoExists) {
            return res.status(400).json({ message: 'Cryptocurrency already exists' });
        }

        const crypto = await Crypto.create({
            name,
            symbol,
            price,
            image,
            change24h
        });

        res.status(201).json(crypto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
