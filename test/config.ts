export default {
    "Contracts": {
      "VenusLens": "0x595e9DDfEbd47B54b996c839Ef3Dd97db3ED19bA",
      "WhitepaperInterestRateModel": "0x49fADE95f94e5EC7C1f4AE13a6d6f9ca18B2F430",
      "Comptroller": "0xf6C14D4DFE45C132822Ce28c646753C54994E59C",
      "Unitroller": "0xfD36E2c2a6789Db23113685031d7F16329158384",
      "VaiUnitroller": "0x004065D34C6b18cE4370ced1CeBDE94865DbFAFE",
      "VaiController": "0x793ff22b882665CA492843962aD945cAf5440F3c",
      "vBep20Delegate": "0xf9f48874050264664bf3d383C7289a0a5BD98896",
      "SXP": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
      "VAI": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
      "USDC": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      "USDT": "0x55d398326f99059fF775485246999027B3197955",
      "BUSD": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      "XVS": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
      "BTCB": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      "ETH": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      "LTC": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
      "XRP": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
      "vUSDC": "0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8",
      "vUSDT": "0xfD5840Cd36d94D7229439859C0112a4185BC0255",
      "vBUSD": "0x95c78222B3D6e262426483D42CfA53685A67Ab9D",
      "vSXP": "0x2fF3d0F6990a40261c66E1ff2017aCBc282EB6d0",
      "vBNB": "0xA07c5b74C9B40447a954e1466938b865b6BBea36",
      "vXVS": "0x151B1e2635A717bcDc836ECd6FbB62B674FE3E1D",
      "vBTC": "0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B",
      "vETH": "0xf508fCD89b8bd15579dc79A6827cB4686A3592c8",
      "vLTC": "0x57A5297F2cB2c0AaC9D554660acd6D385Ab50c6B",
      "vXRP": "0xB248a295732e0225acd3337607cc01068e3b9c10",
      "Timelock": "0x939bD8d64c0A9583A7Dcea9933f7b21697ab6396",
      "GovernorAlpha": "0x406f48f47D25E9caa29f17e7Cfbd1dc6878F078f",
      "VenusPriceOracle": "0x516c18DC440f107f12619a6d2cc320622807d0eE"
    },
    "VenusLens": {
      "name": "VenusLens",
      "contract": "VenusLens"
    },
    "Unitroller": {
      "description": "Unitroller",
      "address": "0xfD36E2c2a6789Db23113685031d7F16329158384"
    },
    "Comptroller": {
      "Comptroller": {
        "address": "0xf6C14D4DFE45C132822Ce28c646753C54994E59C",
        "contract": "Comptroller",
        "description": "Venus Comptroller Contract"
      }
    },
    "Timelock": {
      "Timelock": {
        "address": "0x939bD8d64c0A9583A7Dcea9933f7b21697ab6396",
        "contract": "Timelock",
        "description": "Timelock"
      }
    },
    "Tokens": {
      "SXP": {
        "name": "Swipe Token",
        "symbol": "SXP",
        "decimals": 18,
        "address": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
        "contract": "SwipeToken"
      },
      "VAI": {
        "name": "Venus Stablecoin",
        "symbol": "VAI",
        "decimals": 18,
        "address": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"
      },
      "USDC": {
        "name": "Binance-Peg USD Coin",
        "symbol": "USDC",
        "decimals": 18,
        "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        "contract": "BEP20TokenImplementation"
      },
      "USDT": {
        "name": "Binance-Peg BUSD-T",
        "symbol": "USDT",
        "decimals": 18,
        "address": "0x55d398326f99059fF775485246999027B3197955",
        "contract": "BEP20USDT"
      },
      "XVS": {
        "name": "Venus",
        "symbol": "XVS",
        "decimals": 18,
        "address": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63"
      },
      "BTCB": {
        "name": "Binance-Peg BTCB Token",
        "symbol": "BTCB",
        "decimals": 18,
        "address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        "contract": "BEP20Token"
      },
      "ETH": {
        "name": "Binance-Peg Ethereum Token",
        "symbol": "ETH",
        "decimals": 18,
        "address": "0x55d398326f99059fF775485246999027B3197955",
        "contract": "BEP20Ethereum"
      },
      "LTC": {
        "name": "Binance-Peg Litecoin Token",
        "symbol": "LTC",
        "decimals": 18,
        "address": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
        "contract": "BEP20BitcoinCash"
      },
      "XRP": {
        "name": "Binance-Peg XRP Token",
        "symbol": "XRP",
        "decimals": 18,
        "address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
        "contract": "BEP20XRP"
      },
      "BNB": {
        "name": "BNB",
        "symbol": "BNB",
        "decimals": 18,
        "address": "0x0000000000000000000000000000000000000000"
      }
    },
    "VTokenDelegate": {
      "VTokenDelegate": {
        "address": "0xf9f48874050264664bf3d383C7289a0a5BD98896",
        "contract": "VBep20Delegate",
        "description": "Delegate VBep20Delegate"
      }
    },
    "vTokens": {
      "vUSDC": {
        "name": "Venus USDC",
        "symbol": "vUSDC",
        "decimals": 8,
        "address": "0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        "contract": "VBep20Immutable"
      },
      "vUSDT": {
        "name": "Venus USDT",
        "symbol": "vUSDT",
        "decimals": 8,
        "address": "0xfD5840Cd36d94D7229439859C0112a4185BC0255",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0x55d398326f99059fF775485246999027B3197955",
        "contract": "VBep20Immutable"
      },
      "vBUSD": {
        "name": "Venus BUSD",
        "symbol": "vBUSD",
        "decimals": 8,
        "address": "0x95c78222B3D6e262426483D42CfA53685A67Ab9D",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        "contract": "VBep20Immutable"
      },
      "vSXP": {
        "name": "Venus SXP",
        "symbol": "vSXP",
        "decimals": 8,
        "address": "0x2fF3d0F6990a40261c66E1ff2017aCBc282EB6d0",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
        "contract": "VBep20Immutable"
      },
      "vBNB": {
        "name": "Venus BNB",
        "symbol": "vBNB",
        "decimals": 8,
        "address": "0xA07c5b74C9B40447a954e1466938b865b6BBea36",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "",
        "contract": "VBNB"
      },
      "vXVS": {
        "name": "Venus XVS",
        "symbol": "vXVS",
        "decimals": 8,
        "address": "0x151B1e2635A717bcDc836ECd6FbB62B674FE3E1D",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
        "contract": "VBep20Immutable"
      },
      "vBTC": {
        "name": "Venus BTC",
        "symbol": "vBTC",
        "decimals": 8,
        "address": "0x882C173bC7Ff3b7786CA16dfeD3DFFfb9Ee7847B",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        "contract": "VBep20Immutable"
      },
      "vETH": {
        "name": "Venus ETH",
        "symbol": "vETH",
        "decimals": 8,
        "address": "0xf508fCD89b8bd15579dc79A6827cB4686A3592c8",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        "contract": "VBep20Immutable"
      },
      "vLTC": {
        "name": "Venus LTC",
        "symbol": "vLTC",
        "decimals": 8,
        "address": "0x57A5297F2cB2c0AaC9D554660acd6D385Ab50c6B",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
        "contract": "VBep20Immutable"
      },
      "vXRP": {
        "name": "Venus XRP",
        "symbol": "vXRP",
        "decimals": 8,
        "address": "0xB248a295732e0225acd3337607cc01068e3b9c10",
        "initial_exchange_rate_mantissa": "20000000000000000",
        "admin": "0x1ca3Ac3686071be692be7f1FBeCd668641476D7e",
        "underlying": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
        "contract": "VBep20Immutable"
      }
    },
    "InterestRateModel": {
      "Base200bps_Slope1000bps": {
        "name": "Base200bps_Slope1000bps",
        "contract": "WhitePaperInterestRateModel",
        "description": "WhitePaperInterestRateModel  baseRate=20000000000000000 multiplier=100000000000000000",
        "address": "0x49fADE95f94e5EC7C1f4AE13a6d6f9ca18B2F430",
        "base": "20000000000000000",
        "slope": "100000000000000000"
      }
    },
    "PriceOracle": {
      "description": "VenusPriceOracle",
      "address": "0x516c18DC440f107f12619a6d2cc320622807d0eE"
    },
    "AdapterVenus": {
        "name": "AdapterVenus"
    }
}

export async function deploy(contractName: string) {

}