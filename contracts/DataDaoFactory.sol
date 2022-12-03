// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./DataDAO.sol";

contract DataDoaFactory{
    // factory contract onwer
    address public immutable dataDoaFactoryOwner;

    // number of DataDAO created
    uint256 public numOfDataDao;

    // struct to store all the data of dataDao and dataDaoFactory contract
    struct dataDaoFactoryStruct {
        address dataDaoOnwer;
        address dataDoaFactoryOwner;
    }

    // searching the struct data of DataDao and DataDoaFactory using owner address
    mapping(address => dataDaoFactoryStruct) public allDataDaos;

    // onwer address will be used check which address own/create a new dataDAO
    // mapping(ownerAddress => smart contract address)
    mapping(address => address) public searchByAddress;

    /**
     * @dev constructor to get the owner address of this contract factory
     */
    constructor(address _dataDoaFactoryOwner) {
        dataDoaFactoryOwner = _dataDoaFactoryOwner;
    }

    /**
     * @dev function to create the contract DATADAO
     */
    function createDataDao(address _dataDaoOnwer) public {
        DataDAO dataDao = new DataDAO(
            _dataDaoOnwer
        );
        // Increment the number of DataDao
        numOfDataDao++;

        // Add the new DataDAO to the mapping
        allDataDaos[msg.sender] = (
            dataDaoFactoryStruct(
                msg.sender, // address of dataDAO onwer 
                address(this)
            )
        );

        // search the profile by using owner address
        searchByAddress[msg.sender] = address(dataDao);
    }

    

    // get the balance of the contract
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // get the address of this contract
    function getAddressOfContract() public view returns (address) {
        return address(this);
    }

     // function to withdraw the fund from contract factory
    function withdraw(uint256 amount) external payable {
        require(msg.sender == dataDoaFactoryOwner, "ONLY_ONWER_CAN_CALL_FUNCTION");
        // sending money to contract owner
        require(address(this).balance >= amount, "not_enough_funds");
        (bool success, ) = dataDoaFactoryOwner.call{value: amount}("");
        require(success, "TRANSFER_FAILED");
    }

    // get the address of trustFactory contract owner
    function getAddressOfDataDaoFactoryOwner() public view returns (address) {
        return dataDoaFactoryOwner;
    }

    // receive function is used to receive Ether when msg.data is empty
    receive() external payable {}

    // Fallback function is used to receive Ether when msg.data is NOT empty
    fallback() external payable {}
}