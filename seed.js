const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Crypto = require('./models/Crypto');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const seedCryptos = [
    { name: 'Bitcoin', symbol: 'BTC', price: 65000, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', change24h: 2.5 },
    { name: 'Ethereum', symbol: 'ETH', price: 3500, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', change24h: 1.2 },
    { name: 'Tether', symbol: 'USDT', price: 1.00, image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png', change24h: 0.01 },
    { name: 'BNB', symbol: 'BNB', price: 600, image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png', change24h: -0.5 },
    { name: 'Solana', symbol: 'SOL', price: 150, image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', change24h: 5.4 },
    { name: 'Dogecoin', symbol: 'DOGE', price: 0.15, image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png', change24h: 12.5 },
    { name: 'Pepe', symbol: 'PEPE', price: 0.000008, image: 'https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg', change24h: 25.4 },
    { name: 'Chainlink', symbol: 'LINK', price: 18.5, image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png', change24h: 3.2 }
];

const importData = async () => {
    try {
        await Crypto.deleteMany();
        await Crypto.insertMany(seedCryptos);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

importData();
