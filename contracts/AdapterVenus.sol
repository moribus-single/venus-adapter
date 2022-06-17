//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./IVbep20.sol";
import "./IUnitroller.sol";

import "hardhat/console.sol";

contract AdapterVenus {
    /**
    * @dev Address of the unitroller in the BSC mainnet
    */
    address private _unitroller = 0xfD36E2c2a6789Db23113685031d7F16329158384;

    /**
     * @dev Address of the vUSDT in the BSC mainnet
     */
    address private _vUSDT = 0xfD5840Cd36d94D7229439859C0112a4185BC0255;

    /**
     * @dev Address of the USDT in the BSC mainnet
     */
    address private _USDT = 0x55d398326f99059fF775485246999027B3197955;

    function mint(uint256 mintAmount) external {
        IERC20(_USDT).transferFrom(msg.sender, address(this), mintAmount);
        IERC20(_USDT).approve(_vUSDT, mintAmount);

        uint256 balanceBefore = IERC20(_vUSDT).balanceOf(address(this));
        assert(IVBep20(_vUSDT).mint(mintAmount) == 0);
        uint256 balanceAfter = IERC20(_vUSDT).balanceOf(address(this));

        IERC20(_vUSDT).transfer(msg.sender, balanceAfter - balanceBefore);
    }

    function redeem(uint256 redeemTokens) external {
        (uint err, uint liquidity, uint shortfall) = IUnitroller(_unitroller).getAccountLiquidity(msg.sender);
        console.log(liquidity, redeemTokens);
        require(err == 0, "join the Discord");
        require(shortfall == 0, "account underwater");    
        require(liquidity > redeemTokens, "account has excess collateral");  

        IERC20(_vUSDT).transferFrom(msg.sender, address(this), redeemTokens);
        IERC20(_vUSDT).approve(_vUSDT, redeemTokens);

        uint256 balanceBefore = IERC20(_USDT).balanceOf(address(this));
        assert(IVBep20(_vUSDT).redeem(redeemTokens) == 0);
        uint256 balanceAfter = IERC20(_USDT).balanceOf(address(this));

        IERC20(_USDT).transfer(msg.sender, balanceAfter - balanceBefore);
    }

    function enterMarkets(address[] calldata vTokens) external {
        uint[] memory codes = IUnitroller(_unitroller).enterMarkets(vTokens);
        
        for(uint i; i < codes.length; i++) {
            assert(codes[i] == 0);
        }
    }

    
}