pragma solidity >=0.6.0 <0.9.0;
pragma abicoder v2;

contract YourContract {
    
    event NewEstate(
        uint estateId, 
        uint price, 
        string addr, 
        uint squareMeter, 
        string description, 
        uint date, 
        uint nbRoom
    );

    struct Estate {
        uint price;
        string addr;
        uint squareMeter;
        string description; //byte32 si string marche pas
        address addrSeller;
        uint date;
        uint nbRoom;
        bool isSold;
    }

    Estate[] public realEstates;
    
    function createEstate(uint _price, string memory _addr, uint _squareMeter, string memory _description, uint _date, uint _nbRoom) external returns (bool) {
        realEstates.push(Estate(_price, _addr, _squareMeter, _description, msg.sender, _date, _nbRoom, false));
        uint id = realEstates.length - 1;
        emit NewEstate(id, _price, _addr, _squareMeter, _description, _date, _nbRoom);
        return true;
    }
    
    function buyRealEstate(uint _idRealEstate) payable external{ //msg.value
    
        require(realEstates[_idRealEstate].addrSeller != msg.sender);
        
        require(!realEstates[_idRealEstate].isSold);
        
        require(msg.value == realEstates[_idRealEstate].price);
        
        realEstates[_idRealEstate].isSold = true;
        
        payable(msg.sender).transfer(msg.value);

    }
    
    function getAllRealEstateByAddrSeller() external view returns (Estate[] memory) {
        uint sizeTabRealEstate = realEstates.length + 1;
        Estate[] memory realEstatesBySeller = new Estate[](sizeTabRealEstate);
        uint i = 0;
        for (uint j = 0; j != sizeTabRealEstate - 1; j += 1) {  //for loop example
            if (realEstates[j].addrSeller == msg.sender) {
                realEstatesBySeller[i] = realEstates[j];
                i += 1;
            }      
        }
        return realEstatesBySeller;
    }
    
    function getRealEstateById(uint _idRealEstate) view external returns (Estate memory) {
        require(_idRealEstate < realEstates.length);
        return realEstates[_idRealEstate];
    }
    
    function getAllRealEstate() external view returns (Estate[] memory) {
        return realEstates;
    }

}