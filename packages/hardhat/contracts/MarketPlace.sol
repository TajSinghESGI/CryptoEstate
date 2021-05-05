pragma solidity ^0.8.4;

contract Marketplace {
    
    event NewEstate(
        uint _estateId, 
        uint _price, 
        string _addr, 
        uint _squareMeter, 
        string _description, 
        uint _date, 
        uint _nbRoom
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
    
    function _createEstate(uint _price, string memory _addr, uint _squareMeter, string memory _description, uint _date, uint _nbRoom) external returns (bool) {
        realEstates.push(Estate(_price, _addr, _squareMeter, _description, msg.sender, _date, _nbRoom, false));
        uint id = realEstates.length - 1;
        emit NewEstate(id, _price, _addr, _squareMeter, _description, _date, _nbRoom);
        return true;
    }
    
    function _buyRealEstate(uint _idRealEstate) payable external{ //msg.value
    
        require(realEstates[_idRealEstate].addrSeller != msg.sender);
        
        require(!realEstates[_idRealEstate].isSold);
        
        require(msg.value == realEstates[_idRealEstate].price);
        
        realEstates[_idRealEstate].isSold = true;
        
        payable(msg.sender).transfer(msg.value);

    }

}