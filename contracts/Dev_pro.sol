// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Firstcoin {
    address public minter;

    mapping(address => uint) public balances;

    event Sent(address from, address to, uint amount);

    constructor() {
        minter = msg.sender;
    }

    modifier onlyMinter() {
        require(msg.sender == minter, "Only the minter can call this function");
        _;
    }

    modifier enoughBalance(uint amount) {
        require(amount <= balances[msg.sender], "Insufficient balance");
        _;
    }

    function mint(address receiver, uint amount) public onlyMinter {
        require(amount < 1e60, "Amount exceeds maximum limit");
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) public enoughBalance(amount) {
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }


    uint public playerCount = 0;
    mapping(address => Player) public players;

    enum Level { BEGINNER, INTERMEDIATE, ADVANCED }

    struct Player {
        address playerAddress;
        Level playerLevel;
        string name;
        uint createTime;
    }

    event PlayerAdded(address indexed playerAddress, Level playerLevel, string name, uint createTime);

    function addPlayer(string memory name) public {
        players[msg.sender] = Player(msg.sender, Level.BEGINNER, name, block.timestamp);
        playerCount += 1;
        
        emit PlayerAdded(msg.sender, Level.BEGINNER, name, block.timestamp);
    }

    function getPlayerLevel(address playerAddress) public view returns (Level) {
        return players[playerAddress].playerLevel;
    }

    function changePlayerLevel(address playerAddress) public {
    Player storage player = players[playerAddress];
    
    if (player.playerLevel == Level.BEGINNER && block.timestamp >= player.createTime + 20) {
        player.playerLevel = Level.INTERMEDIATE;
    }
    
    if (player.playerLevel == Level.INTERMEDIATE && block.timestamp >= player.createTime + 40) {
        player.playerLevel = Level.ADVANCED;
    }
    }
}