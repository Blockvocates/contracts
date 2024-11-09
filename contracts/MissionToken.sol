
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MissionToken is ERC20, Ownable {

    constructor(address _initialOwner) ERC20("MissionToken", "MSN") Ownable(_initialOwner)
 {
        _mint(_initialOwner, 1000000 * 10**18); // Mint 1 million tokens
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

}