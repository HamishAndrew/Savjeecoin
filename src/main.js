const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a6e63078dd6f0e9e39c9c29c5d57c568f9316d411c0c304b81eb1f5e26a59e70');
const myWalletAddress = myKey.getPublic('hex'); 


let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', savjeeCoin.getBalanceOfAddress(myWalletAddress));