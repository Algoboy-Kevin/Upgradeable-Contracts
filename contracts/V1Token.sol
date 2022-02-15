// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "./proxy/Initializable.sol";
import "./base/ERC20Upgradeable.sol";
import "./access/OwnableUpgradeable.sol";

contract V1Token is 
  Initializable, 
  ERC20Upgradeable, 
  OwnableUpgradeable 
{

  function initialize() external initializer {
    __ERC20_init("From Infura Token", "FIT");
    __Ownable_init();
    _mint(msg.sender, 7 * 10 ** decimals());
  }

  function mint(address to, uint amount) external onlyOwner {
    _mint(to, amount);
  }
}
