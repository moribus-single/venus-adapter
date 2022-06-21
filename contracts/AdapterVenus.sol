//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./IVbep20.sol";
import "./IUnitroller.sol";

import "hardhat/console.sol";

/**
 * @title Adapter for interacting with Venus Protocol
 * @author Galas' Danil
 * @dev Implementation of adapter for interaction with Venus Protocol
 */
contract AdapterVenus {
    /**
     * @dev Address of the Unitroller.
     */
    address private constant UNITROLLER = 0xfD36E2c2a6789Db23113685031d7F16329158384;
    
    /**
     * @dev Lend some Token to the protocol, get vToken as guarantee of collateral
     * 
     * @param mintAmount Amount of `Token` tokens to lend to the protocol
     * @param Token Address of the token to lend
     * @param vToken Address of the wrapped token to lend
     * @notice `vToken` should be wrapped `Token`
     */
    function mint(uint256 mintAmount, address Token, address vToken) external {
        IERC20(Token).transferFrom(msg.sender, address(this), mintAmount);
        IERC20(Token).approve(vToken, mintAmount);

        // uint256 balanceBefore = IERC20(vToken).balanceOf(address(this));
        assert(IVBep20(vToken).mint(mintAmount) == 0);
        // uint256 balanceAfter = IERC20(vToken).balanceOf(address(this));

        // IERC20(vToken).transfer(msg.sender, balanceAfter - balanceBefore);

        (,uint256 liquidity,) = IUnitroller(UNITROLLER).getAccountLiquidity(address(this));
        console.log(liquidity);
    }

    /**
     * @dev Get back lended tokens
     *
     * @param redeemTokens Amount of `vToken` tokens to redeem
     * @param Token Address of the token to get back 
     * @param vToken Address of the wrapped token to get back 
     */
    function redeem(uint256 redeemTokens, address Token, address vToken) external {
        IERC20(vToken).approve(vToken, redeemTokens);
        uint256 balanceBefore = IERC20(Token).balanceOf(address(this));
        uint256 code = IVBep20(vToken).redeem(redeemTokens);
        console.log(code);
        assert(code == 0);
        uint256 balanceAfter = IERC20(Token).balanceOf(address(this));

        IERC20(Token).transfer(msg.sender, balanceAfter - balanceBefore);
    }

    /**
     * @dev Borrow some tokens from the protocol
     *
     * @param borrowAmount Amount of the tokens to borrow
     * @param vToken Address of the wrapped token to borrow
     */
    function borrow(uint256 borrowAmount, address vToken) external {
        (,uint256 liquidity,) = IUnitroller(UNITROLLER).getAccountLiquidity(address(this));
        require(liquidity > borrowAmount, "account's liquidity is too small");
        
        assert(IVBep20(vToken).borrow(borrowAmount) == 0);
    }

    function repayBorrow(uint256 repayAmount, address Token, address vToken) external {
        IERC20(Token).approve(vToken, repayAmount);
        assert(IVBep20(vToken).repayBorrow(repayAmount) == 0);
    } 

    /**
     * @dev Repay your own borrow
     *
     * @param vTokens List of the vTokens to enter
     */

    function enterMarkets(address[] calldata vTokens) external {
        uint[] memory codes = IUnitroller(UNITROLLER).enterMarkets(vTokens);
        
        for(uint i; i < codes.length; i++) {
            console.log("codes[",i,"]=", codes[i]);
        }
    } 
}