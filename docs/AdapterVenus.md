# AdapterVenus

*Galas&#39; Danil*

> Adapter for interacting with Venus Protocol



*Implementation of adapter for interaction with Venus Protocol*

## Methods

### borrow

```solidity
function borrow(uint256 borrowAmount, address vToken) external nonpayable
```



*Borrow some tokens from the protocol*

#### Parameters

| Name | Type | Description |
|---|---|---|
| borrowAmount | uint256 | Amount of the tokens to borrow |
| vToken | address | Address of the wrapped token to borrow |

### enterMarkets

```solidity
function enterMarkets(address[] vTokens) external nonpayable
```



*Repay your own borrow*

#### Parameters

| Name | Type | Description |
|---|---|---|
| vTokens | address[] | List of the vTokens to enter |

### mint

```solidity
function mint(uint256 mintAmount, address Token, address vToken) external nonpayable
```

`vToken` should be wrapped `Token`

*Lend some Token to the protocol, get vToken as guarantee of collateral *

#### Parameters

| Name | Type | Description |
|---|---|---|
| mintAmount | uint256 | Amount of `Token` tokens to lend to the protocol |
| Token | address | Address of the token to lend |
| vToken | address | Address of the wrapped token to lend |

### redeem

```solidity
function redeem(uint256 redeemTokens, address Token, address vToken) external nonpayable
```



*Get back lended tokens*

#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemTokens | uint256 | Amount of `vToken` tokens to redeem |
| Token | address | Address of the token to get back  |
| vToken | address | Address of the wrapped token to get back  |

### repayBorrow

```solidity
function repayBorrow(uint256 repayAmount, address Token, address vToken) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| repayAmount | uint256 | undefined |
| Token | address | undefined |
| vToken | address | undefined |




