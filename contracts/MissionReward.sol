
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MissionReward is Ownable {
    event MissionCompleted(address indexed user, bytes32 missionId, uint256 reward);

    mapping(address => mapping(bytes32 => bool)) public completedMissions;
    uint256 public rewardAmount = 10 * 10**18; // 10 tokens per mission
    
    IERC20 public missionToken;


    constructor(address _initialOwner,address _missionToken) Ownable(_initialOwner) {
        missionToken = IERC20(_missionToken);
    }   
    
    function updateRewardAmount(uint256 _amount) external onlyOwner {
        rewardAmount = _amount;
    }
    
    function completeMission(address user, bytes32 missionId) external onlyOwner {
        require(!completedMissions[user][missionId], "Mission already completed");
        completedMissions[user][missionId] = true;
        missionToken.transfer(user, rewardAmount);
        
        emit MissionCompleted(user, missionId, rewardAmount);
    }
    
}