
//VS is verysimple
pragma solidity >=0.4.22 <0.7.0;

contract VS{

uint256 number;

    function get3() public view returns ( uint256 ) {
    return 3 ;
    }

    function setnumber(uint256 n) public {
        number = n;
    }
    
    function getnumber() public view returns (uint256){
        return number;
    }
    
}


