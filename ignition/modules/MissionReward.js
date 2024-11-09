const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("LockModule", (m) => {
  const MissionReward = m.contract("MissionReward", ['0xcDEe632FB1Ba1B3156b36cc0bDabBfd821305e06', '0x2DE129727df37e4B7E3A51ba41fe8Bd9422490f8']);
  console.log(MissionReward)

  return { MissionReward };
});


//0x40BdA327da6460B106001709ef2F730825c634D8