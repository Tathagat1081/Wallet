const Migrations = artifacts.require("Migrations");
const EthTokenMock = artifacts.require("EthTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(EthTokenMock);
  const tokenMock = await EthTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0xd2bD40EF1dd0cD46CFB07E1B0c2b1c264CF72111',
    '1000000000000000000000'
  )
};
