const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployMissionRewards() {


    // Contracts are deployed using the first signer/account by default
    const [owner, userAccount] = await ethers.getSigners();

    const MissionToken = await ethers.getContractFactory("MissionToken");
    const missionToken = await MissionToken.deploy(owner.address);

    const MissionReward = await ethers.getContractFactory("MissionReward");
    const missionReward = await MissionReward.deploy(owner.address, missionToken.target);

    return { owner, userAccount, missionToken, missionReward };
  }

  describe("Deployment", function () {
    it("Should create tokens", async function () {
      const { missionToken, missionReward, owner } = await loadFixture(deployMissionRewards);

      expect(await missionToken.totalSupply()).to.equal(1000000000000000000000000n);

    });

    it("Should send the token to MissionReward Contract", async function () {
      const { missionToken, missionReward, owner } = await loadFixture(deployMissionRewards);
      await missionToken.transfer(missionReward.target, 1000000000000000000000000n);
      expect(await missionToken.balanceOf(missionReward.target)).to.equal(1000000000000000000000000n);
    })

    it("should get reward on complete mission", async function () {
      const { missionToken, missionReward, owner, userAccount } = await loadFixture(deployMissionRewards);
      console.log(missionReward.target);
      await missionToken.transfer(missionReward.target, 1000000000000000000000000n);
      const missionId = ethers.id("manjik@gmail.com" + "mission101");
      await missionReward.completeMission(userAccount.address, missionId);

      expect(await missionToken.balanceOf(userAccount.address)).to.equal(ethers.parseEther("10"));
    }
    )

    // it("Should set the right owner", async function () {
    //   const { lock, owner } = await loadFixture(deployOneYearLockFixture);

    //   expect(await lock.owner()).to.equal(owner.address);
    // });

    // it("Should receive and store the funds to lock", async function () {
    //   const { lock, lockedAmount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   expect(await ethers.provider.getBalance(lock.target)).to.equal(
    //     lockedAmount
    //   );
    // });

    // it("Should fail if the unlockTime is not in the future", async function () {
    //   // We don't use the fixture here because we want a different deployment
    //   const latestTime = await time.latest();
    //   const Lock = await ethers.getContractFactory("Lock");
    //   await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //     "Unlock time should be in the future"
    //   );
    // });
  });




});

