
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3")
require("@nomiclabs/hardhat-ganache");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
task('balance', 'get ETH balance of an address')
  .addParam('address', 'address which balance is to be fetched')
  .setAction(async({ address })=>{
    const balance = await web3.eth.getBalance(address)
    console.log(`Balance is ${web3.utils.fromWei(balance)}Eth`)
  })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url:"https://rinkeby.infura.io/v3/7b80fb8411c44e4b944c517a5bc3a1c4",
      accounts:['b737e7400de4fb3dc9227b3b9cd643933a4da32d707e137accff56fe7facd4b5']
    }
    
  }
};
