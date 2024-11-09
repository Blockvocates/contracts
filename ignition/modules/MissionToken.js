const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("LockModule", (m) => {
  const MissionToken = m.contract("MissionToken", ['0xcDEe632FB1Ba1B3156b36cc0bDabBfd821305e06']);
  console.log(MissionToken)

  return { MissionToken };
});
