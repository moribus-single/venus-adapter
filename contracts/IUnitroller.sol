//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IUnitroller {
    function getAccountLiquidity(address account) external view returns (uint, uint, uint);
    function enterMarkets(address[] calldata vTokens) external returns (uint[] memory);
}