// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "./proxy/Initializable.sol";
import "./base/ERC20Upgradeable.sol";
import "./access/OwnableUpgradeable.sol";

contract V2Token is 
  Initializable, 
  ERC20Upgradeable, 
  OwnableUpgradeable 
{

  function mint(address to, uint amount) external onlyOwner {
    _mint(to, amount);
  }

  function burn(address from, uint amount) external onlyOwner {
    _burn(from, amount);
  }
}
