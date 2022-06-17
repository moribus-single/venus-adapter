import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-abi-exporter";
import "@primitivefi/hardhat-dodoc";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-solhint";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: "https://speedy-nodes-nyc.moralis.io/9a22a00e96eb4183056d407a/bsc/mainnet/archive",
        blockNumber: 18735164
      }
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: process.env.MNEMONIC}
    },
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },

  abiExporter: [
    {
      path: './abi/pretty',
      pretty: true,
    },
    {
      path: './abi/ugly',
      pretty: false,
    },
  ],

  dodoc: {
    runOnCompile: false,
    keepFileStructure: true,
    outputDir: './docs',
  },

  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    strict: true,
  }
};

export default config;
