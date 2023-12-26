const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Firstcoin = await ethers.getContractFactory("Firstcoin");
  const firstcoin = await Firstcoin.deploy();

  await firstcoin.deployed();

  console.log("Firstcoin deployed to:", firstcoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
