require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config()

// // const opencampus = {
// //     id: 656476,
// //     name: "opencampus",
// //     rpcUrls: {
// //         public: { http: ["https://rpc.open-campus-codex.gelato.digital"] },
// //         default: { http: ["https://rpc.open-campus-codex.gelato.digital"] },
// //     },
// //     blockExplorers: {
// //         default: {
// //             name: "Open Campus Codex",
// //             url: "https://opencampus.gelatoscout.com",
// //             apiUrl: "https://opencampus.gelatoscout.com/api",
// //         },
// //     },
// //     nativeCurrency: {
// //         decimals: 18,
// //         name: "EDU",
// //         symbol: "EDU",
// //     },
// //     testnet: true,
// // };
module.exports = {
  solidity: "0.8.24",

  networks: {
    hardhat: {
      chainId: 1337,
    },
    opencampus: {
      url: "https://rpc.open-campus-codex.gelato.digital",
      chainId: 656476,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }

  },
};
