# Simple Upgradeable ERC20 Token

This project demonstrates a basic OpenZeppelin Upgradable use case.

 It comes with two versions of ERC20 token contract and scripts to deploy each contract, and flattened version of each contract for verifying smart contract on etherscan.

Please install all the depency listed on package json and try running some of the following tasks:

## 1. Creating your .env
To run the code you may need to create your own .env file on this project folder. and add these line:
INFURA_KEY=**YOUR_INFURA_PROJECT_ID**
PRI_KEY=**YOUR_WALLET_PRIVATE_KEY**
ETHERSCAN_API_KEY=**YOUR_ETHERSCAN_API_KEY**

## 2. Compiling contract
Run ```npx hardhat compile```

## 3. Deploying v1
Run ```npx hardhat run scripts/deploy_v1.ts --network goerli```

If it is successfully deployed, you may see there are three contracts deployed:
  1. Implemention Contract (ERC20 v1)
  2. Proxy Admin
  3. Proxy Contract (This contract holds your implementation contract states)

## 4. Verifying Implemention Contract
To verifying your code using hardhat. You need to get your API key from etherscan. Run ```npx hardhat verify YOUR_IMPLEMENTATION_CONTRACT_ADDRESS --network goerli```

In case it doesn't work, you may manually verify by following this steps:
  1. Flatten your source code using ```npx hardhat flatten contracts/V1Token.sol > contracts/flatten/V1Token.sol```
  2. Submit your code on etherscan single-file

## 5. Identify Proxy Contract
After verifying the implementation contract you need to let the etherscan know that this contract is a proxy contract. Head to etherscan, find the proxy contract, and click on more option to verify proxy contract. Now you can read and write as proxy.

## 6. Upgrading Contract
To upgrade the implementation contract run ```npx hardhat run scripts/deploy_v2.ts --network goerli```. Once it's done, you need to verify the V2 implementation contract. Now you can see there is new burn function on proxy contract.


 





