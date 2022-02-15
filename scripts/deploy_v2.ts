import { ethers, upgrades } from "hardhat";

const PROXY = "0xd549d38BdcA359697dFa136676528013368Fe201";
const NEW_IMPLEMENTATION_CONTRACT = "V2Token"

const main = async() => {
  console.log("Upgrading to V2, deploying V2 contract");
  const V2Contract = await ethers.getContractFactory(NEW_IMPLEMENTATION_CONTRACT);
  
  console.log(`Using proxy address ${PROXY}, please change the value it needed`);
  const UpgradeProxy = await upgrades.upgradeProxy(PROXY, V2Contract);

  console.log(`Contract is upgraded at ${UpgradeProxy.address}, please verify on etherscan`);
}

main();