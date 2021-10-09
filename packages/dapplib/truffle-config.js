require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan razor toss huge hidden clinic army gaze'; 
let testAccounts = [
"0xf8baf6a9877ee5ecd8b6c4427ab2536c95ee6a80612d7e72ef6485debf95aa3b",
"0xa5d99b8bdfe5708a337d0b8bcaf50c3b5315ec358a1bf954efef38c72d237283",
"0xd37723ea013447a6434b4deb0ca550d654cba261eacf63cf53e2eb07ed6b438d",
"0x58b8a104982e511b1a764b98813bbd2b7d7148547b16f1fe1f6f605565865022",
"0x401852872c959a003e7ec3b17f719344918556a2bac36a3d1a37570577f8a1c7",
"0x0469cab7245b425a725f5450f224b1684a9363a53b62fa1ea727b25075955f5d",
"0x3cbfb73e69fa280ea9f05c652451fad6a752edf61ebf9a231169e3114ad1d20e",
"0x5c7cf214f1cbbec9a5ad25c6a661c4c1056afc540a18135d7216620866810109",
"0x83baf7eadb5bb33d14da8f1b7d55cfd0c7561a63ae6290ed53e5f15f201a4aec",
"0x9635b7659d480ca89d3b3d520db114f9a4cb4d295b47760bad344a3386a7ffdf"
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

