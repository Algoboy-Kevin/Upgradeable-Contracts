import { ethers, upgrades } from "hardhat";

const IMPLEMENTATION_CONTRACT = "V1Token"

const main = async() => {
  console.log("Deploying ERC20 Contract");
  const V1Contract = await ethers.getContractFactory(IMPLEMENTATION_CONTRACT);
  console.log("Deploying Proxy Contract");
  const ProxyContract = await upgrades.deployProxy(V1Contract);
  console.log(`Contract deployed to: ${ProxyContract.address}, please verify on etherscan`)
}

main();