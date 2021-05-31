const DragonLair = artifacts.require("DragonLair");
const QuickConverter = artifacts.require("QuickConverter");

const tokenVsBridge = [
  {
    "TOKEN": '0x82B6205002ecd05e97642D38D61e2cFeaC0E18cE',
    "BRIDGE": '0x831753DD7087CaC61aB5644b308642cc1c33Dc13'
  },
  {
    "TOKEN": '0x9c49BA0212Bb5Db371e66b59D1565b7c06E4894e',
    "BRIDGE": '0x831753DD7087CaC61aB5644b308642cc1c33Dc13'
  },
  {
    "TOKEN": '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
    'BRIDGE':'0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
  },
  {
    "TOKEN": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x9719d867A500Ef117cC201206B8ab51e794d3F82",
    "BRIDGE": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
  },
  {
    "TOKEN": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0x0e59D50adD2d90f5111aca875baE0a72D95B4762",
    "BRIDGE": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
  },
  {
    "TOKEN": "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x104592a158490a9228070E0A8e5343B499e125D0",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0x9f001a9c830c6ed1e656a35163d3b029fffa5505",
    "BRIDGE": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
  },
  {
    "TOKEN": "0x83f8ae478cc016a32052b64037ef3386340ced49",
    "BRIDGE": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
  },
  {
    "TOKEN": "0x840195888Db4D6A99ED9F73FcD3B225Bb3cB1A79",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x823CD4264C1b951C9209aD0DeAea9988fE8429bF",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x3e121107F6F22DA4911079845a470757aF4e1A1b",
    "BRIDGE": "0x104592a158490a9228070E0A8e5343B499e125D0"
  },
  {
    "TOKEN": "0x42435F467D33e5C4146a4E8893976ef12BBCE762",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x2a93172c8DCCbfBC60a39d56183B7279a2F647b4",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xF4b8888427b00d7caf21654408B7CBA2eCf4EbD9",
    "BRIDGE": "0x9719d867A500Ef117cC201206B8ab51e794d3F82"
  },
  {
    "TOKEN": "0xE0b22E0037B130A9F56bBb537684E6fA18192341",
    "BRIDGE": "0x9719d867A500Ef117cC201206B8ab51e794d3F82"
  },
  {
    "TOKEN": "0xDAE5F1590db13E3B40423B5b5c5fbf175515910b",
    "BRIDGE": "0x9719d867A500Ef117cC201206B8ab51e794d3F82"
  },
  {
    "TOKEN": "0x3809dcDd5dDe24B37AbE64A5a339784c3323c44F",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0xab0b2ddB9C7e440fAc8E140A89c0dbCBf2d7Bbff",
    "BRIDGE": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
  },
  {
    "TOKEN": "0x46F48FbdedAa6F5500993BEDE9539ef85F4BeE8e",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xd28449BB9bB659725aCcAd52947677ccE3719fD7",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x8d1566569d5b695d44a9a234540f68D393cDC40D",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0x521CddC0CBa84F14c69C1E99249F781AA73Ee0BC",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x7FBc10850caE055B27039aF31bD258430e714c62",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    "BRIDGE": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
  },
  {
    "TOKEN": "0xa1428174F516F527fafdD146b883bB4428682737",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xe20f7d1f0eC39C4d5DB01f53554F2EF54c71f613",
    "BRIDGE": "0x9719d867A500Ef117cC201206B8ab51e794d3F82"
  },
  {
    "TOKEN": "0x8c8bdBe9CeE455732525086264a4Bf9Cf821C498",
    "BRIDGE": "0x9719d867A500Ef117cC201206B8ab51e794d3F82"
  },
  {
    "TOKEN": "0x98ea609569bD25119707451eF982b90E3eb719cD",
    "BRIDGE": "0x9719d867A500Ef117cC201206B8ab51e794d3F82"
  },
  {
    "TOKEN": "0x8a2870fb69A90000D6439b7aDfB01d4bA383A415",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0x20D3922b4a1A8560E1aC99FBA4faDe0c849e2142",
    "BRIDGE": "0x9719d867A500Ef117cC201206B8ab51e794d3F82"
  },
  {
    "TOKEN": "0x034b2090b579228482520c589dbD397c53Fc51cC",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x23D29D30e35C5e8D321e1dc9A8a61BFD846D4C5C",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0xa0E390e9ceA0D0e8cd40048ced9fA9EA10D71639",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x7CdC0421469398e0F3aA8890693d86c840Ac8931",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xeCf8f2FA183b1C4d2A269BF98A54fCe86C812d3e",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0xDb3b3b147A030F032633f6C4BEBf9a2fB5a882B5",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0xf153eff70dc0bf3b085134928daeea248d9b30d0",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0xC3Ec80343D2bae2F8E680FDADDe7C17E71E114ea",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xe86E8beb7340659DDDCE61727E500e3A5aD75a90",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0xFeD16c746CB5BFeD009730f9E3e6A673006105c7",
    "BRIDGE": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
  },
  {
    "TOKEN": "0x7c28f627ea3aec8b882b51eb1935f66e5b875714",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0xd55fce7cdab84d84f2ef3f99816d765a2a94a509",
    "BRIDGE": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
  },
  {
    "TOKEN": "0x07738Eb4ce8932CA961c815Cb12C9d4ab5Bd0Da4",
    "BRIDGE": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
  },
  {
    "TOKEN": "0x4cebdbcb286101a17d3ea1f7fe7bbded2b2053dd",
    "BRIDGE": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
  },
  {
    "TOKEN": "0x462d8d82c2b2d2ddabf7f8a93928de09d47a5807",
    "BRIDGE": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
  }
]

module.exports = async function (deployer, network) {

  /**await deployer.deploy(
      QuickConverter,
      '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
      DragonLair.address,
      '0x831753dd7087cac61ab5644b308642cc1c33dc13',
      '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      '0x784bd6ed1430ec166d766e6cb90fed277f2ebb27'
  );*/

  var quickConverter = await QuickConverter.deployed();

    for(var i = 0; i < tokenVsBridge.length; i++) {
      if (tokenVsBridge[i]['BRIDGE'] !== '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619') {
        console.log("Adding bridge ", tokenVsBridge[i]['TOKEN'], tokenVsBridge[i]['BRIDGE'])
        await quickConverter.setBridge(tokenVsBridge[i]['TOKEN'], tokenVsBridge[i]['BRIDGE']);
      }
    }
};