const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("My Dapp", function () {
  let myContract;

  describe("YourContract", function () {

    it("Should be able to create a new realState", async function () {

      const accounts = await ethers.getSigners();
      const YourContractFactory = await ethers.getContractFactory("YourContract");
      const YourContract = await YourContractFactory.deploy();

      await YourContract.deployed();
      // await YourContract.sePresenter()
      await YourContract.createEstate(299000, "Rue de la prévoyance", 120, "Magnifique", 01012020, 6);

      let testRealEstate = await YourContract.realEstates(0);

      expect(parseInt(testRealEstate.price._hex)).to.equal(299000);
      expect(testRealEstate.addr).to.equal("Rue de la prévoyance");
      expect(parseInt(testRealEstate.squareMeter._hex)).to.equal(120);
      expect(testRealEstate.description).to.equal("Magnifique");
      expect(parseInt(testRealEstate.date._hex)).to.equal(01012020);
      expect(parseInt(testRealEstate.nbRoom._hex)).to.equal(6);
      expect(testRealEstate.isSold).to.equal(false);
    })
  });
});
