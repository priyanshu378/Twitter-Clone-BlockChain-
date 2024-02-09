require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
const API_URL = "https://eth-goerli.g.alchemy.com/v2/ndo5_YsLvOa3bd3Gkg8Qo2Se-rYixYdB";
const PRIVATE_KEY = "dc91d6464d7e9d3d3927c7dd48a3516cd8223dd036aa14d200c6270e66e57cbe"
const PUBLIC_KEY = "0x6A098aE47e959cC0396967C2D353b45b0B7D1c3E";

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

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};