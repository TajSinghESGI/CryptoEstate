const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("YourContract", function() {

  let price = 1;
  let address = "Rue de la monnaie"
  let squareMeter = 90;
  let description = "Test";
  let date = 06052021;
  let rooms = 4; 

  let price2 = 2;
  let address2 = "Rue de la monnaie"
  let squareMeter2 = 90;
  let description2 = "Test";
  let date2 = 06052021;
  let rooms2 = 4; 

    it("Should deploy YourContract", async function() {
      const accounts = await ethers.getSigners();
      const YourContractFactory = await ethers.getContractFactory("YourContract");
      const YourContract = await YourContractFactory.deploy();
      await YourContract.deployed();
    
      describe("createEstate()", function() {
        it("Should be able to create a new realEstate", async function() {
          // await YourContract.sePresenter()
          await YourContract.createEstate(price, address, squareMeter, description, date, rooms);

          await YourContract.createEstate(price2, address2, squareMeter2, description2, date2, rooms2);
  
          let testRealEstate1 = await YourContract.realEstates(0);
          let testRealEstate2 = await YourContract.realEstates(1);
  
          expect(parseInt(testRealEstate1.price._hex)).to.equal(price);
          expect(testRealEstate1.addr).to.equal(address);
          expect(parseInt(testRealEstate1.squareMeter._hex)).to.equal(squareMeter);
          expect(testRealEstate1.description).to.equal(description);
          expect(parseInt(testRealEstate1.date._hex)).to.equal(date);
          expect(parseInt(testRealEstate1.nbRoom._hex)).to.equal(rooms);
          expect(testRealEstate1.isSold).to.equal(false);

          expect(parseInt(testRealEstate2.price._hex)).to.equal(price2);
          expect(testRealEstate2.addr).to.equal(address2);
          expect(parseInt(testRealEstate2.squareMeter._hex)).to.equal(squareMeter2);
          expect(testRealEstate2.description).to.equal(description2);
          expect(parseInt(testRealEstate2.date._hex)).to.equal(date2);
          expect(parseInt(testRealEstate2.nbRoom._hex)).to.equal(rooms2);
          expect(testRealEstate2.isSold).to.equal(false);
        })
      })

      describe("buyRealEstate()", function() {
        it("Should be able to buy a realEstate", async function() {
          
          let otherAccount = YourContract.connect(accounts[1]);
          await otherAccount.buyRealEstate(0, {value:1});
  
          let testRealEstate = await YourContract.realEstates(0);
  
          expect(parseInt(testRealEstate.price._hex)).to.equal(price);
          expect(testRealEstate.addr).to.equal(address);
          expect(parseInt(testRealEstate.squareMeter._hex)).to.equal(squareMeter);
          expect(testRealEstate.description).to.equal(description);
          expect(parseInt(testRealEstate.date._hex)).to.equal(date);
          expect(parseInt(testRealEstate.nbRoom._hex)).to.equal(rooms);
          expect(testRealEstate.isSold).to.equal(true);
        })
      })
      
      describe("getAllRealEstateByAddrSeller()", function() {
        it("Should be able to list all realEstate of the seller", async function() {
  
          let testRealEstate = await YourContract.getAllRealEstateByAddrSeller();
          console.log(testRealEstate)
  
          expect(parseInt(testRealEstate[0].price._hex)).to.equal(price);
          expect(testRealEstate[0].addr).to.equal(address);
          expect(parseInt(testRealEstate[0].squareMeter._hex)).to.equal(squareMeter);
          expect(testRealEstate[0].description).to.equal(description);
          expect(parseInt(testRealEstate[0].date._hex)).to.equal(date);
          expect(parseInt(testRealEstate[0].nbRoom._hex)).to.equal(rooms);
          expect(testRealEstate[0].isSold).to.equal(true);

          expect(parseInt(testRealEstate[1].price._hex)).to.equal(price2);
          expect(testRealEstate[1].addr).to.equal(address2);
          expect(parseInt(testRealEstate[1].squareMeter._hex)).to.equal(squareMeter2);
          expect(testRealEstate[1].description).to.equal(description2);
          expect(parseInt(testRealEstate[1].date._hex)).to.equal(date2);
          expect(parseInt(testRealEstate[1].nbRoom._hex)).to.equal(rooms2);
          expect(testRealEstate[1].isSold).to.equal(false);
        })
      })
      
      describe("getRealEstateById()", function() {
        it("Should be able to getrealEstate by id", async function() {
  
          let testRealEstate = await YourContract.getRealEstateById(1);

          expect(parseInt(testRealEstate.price._hex)).to.equal(price2);
          expect(testRealEstate.addr).to.equal(address2);
          expect(parseInt(testRealEstate.squareMeter._hex)).to.equal(squareMeter2);
          expect(testRealEstate.description).to.equal(description2);
          expect(parseInt(testRealEstate.date._hex)).to.equal(date2);
          expect(parseInt(testRealEstate.nbRoom._hex)).to.equal(rooms2);
          expect(testRealEstate.isSold).to.equal(false);
        })
      })

      describe("getRealEstateById()", function() {
        it("Should be able to get realEstate by id", async function() {
  
          let testRealEstate = await YourContract.getRealEstateById(1);

          expect(parseInt(testRealEstate.price._hex)).to.equal(price2);
          expect(testRealEstate.addr).to.equal(address2);
          expect(parseInt(testRealEstate.squareMeter._hex)).to.equal(squareMeter2);
          expect(testRealEstate.description).to.equal(description2);
          expect(parseInt(testRealEstate.date._hex)).to.equal(date2);
          expect(parseInt(testRealEstate.nbRoom._hex)).to.equal(rooms2);
          expect(testRealEstate.isSold).to.equal(false);
        })
      })

      describe("getAllRealEstate()", function() {
        it("Should be able to get all realEstate", async function() {
  
          let testRealEstate = await YourContract.getAllRealEstate();

          expect(parseInt(testRealEstate[0].price._hex)).to.equal(price);
          expect(testRealEstate[0].addr).to.equal(address);
          expect(parseInt(testRealEstate[0].squareMeter._hex)).to.equal(squareMeter);
          expect(testRealEstate[0].description).to.equal(description);
          expect(parseInt(testRealEstate[0].date._hex)).to.equal(date);
          expect(parseInt(testRealEstate[0].nbRoom._hex)).to.equal(rooms);
          expect(testRealEstate[0].isSold).to.equal(true);

          expect(parseInt(testRealEstate[1].price._hex)).to.equal(price2);
          expect(testRealEstate[1].addr).to.equal(address2);
          expect(parseInt(testRealEstate[1].squareMeter._hex)).to.equal(squareMeter2);
          expect(testRealEstate[1].description).to.equal(description2);
          expect(parseInt(testRealEstate[1].date._hex)).to.equal(date2);
          expect(parseInt(testRealEstate[1].nbRoom._hex)).to.equal(rooms2);
          expect(testRealEstate[1].isSold).to.equal(false);
        })
      })

    })

});
