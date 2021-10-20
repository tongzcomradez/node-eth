require('dotenv').config() ;
const Web3 = require('web3');
const abi = require('./abi.json')
const ethers = require('ethers')

const infuraKey = process.env.INFURA_KEY;

const merchants = {
    DAI: '0x5aCB56734DD57DB912E85248d02EF728c15375dd',
    BUSD: '0xA1E497601C65B521EFBB53F55B7D2aba2919dB38',
    USDT: '0x5aCB56734DD57DB912E85248d02EF728c15375dd',
    USDC: '0x5aCB56734DD57DB912E85248d02EF728c15375dd',
    WBNB: '0x5aCB56734DD57DB912E85248d02EF728c15375dd',
}
  
const web3 = new Web3(new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${infuraKey}`));

const merchant = new web3.eth.Contract(abi, merchants['BUSD']);

const walletAddress = '0xCB950adCa1d67749486D65311Aba5efdA8351bD3'
merchant.methods.getShopBalance(walletAddress).call(function(error, balance) {
    if (error) {
        throw new Error(error)
    }
    
    console.log(`Balance is ${ethers.utils.formatEther(balance)}`)
});