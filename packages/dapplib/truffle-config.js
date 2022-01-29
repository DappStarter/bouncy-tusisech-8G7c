require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name riot still honey inflict climb sure gift'; 
let testAccounts = [
"0x4f9d42a82fe8a091d95530ad8fc647c707d30bb98ba2a32a5bbedff6501a315b",
"0xf2cf1302e487b30c5ce590af4d67a5085bb0b7716b50e78349ef592163fb97bd",
"0xc5ad4d54894cf8a3c2545d7217f452dddf31db8fe0c5ccb1db60fa30c975b263",
"0x221952a669594dfd07938cc2d0000d8a0715e4bfbcf0a0bff7be62c303d6049e",
"0x0dc0bc213b5e7a561e122419f6862a957a489560a42107047ad3436ce3764edb",
"0xab8f4826cba6bbba95431fb972700fa0c97e188dbb1482dad5fe02ecddf1c9f5",
"0x6d037b8866e091d8931701044f84436703be2a372792345c1da950093baa05b0",
"0xc800eeb076ea8b33a0ffe95397b1fddf4c2ec703a7120fd2a9d0c7f42d475143",
"0x47072785fa2d9553c5c504d9abc58a840e894c749263d92bb27734772499dadd",
"0x667e0949d0d41293ebc37a4180886ddee0630a0085a94e97a5215c05690cdd0c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

