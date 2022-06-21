import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import hre, { ethers } from "hardhat";
import { IERC20, IVBep20, AdapterVenus } from "../typechain"

import config from "./config"
import { deployWithoutParams } from "./helpers"

describe("Venus adapter", function () {
    let ADAPTER_name: string = config.AdapterVenus.name;
    
    let vUSDT_addr: string = config.vTokens.vUSDT.address;
    let vLTC_addr: string = config.vTokens.vLTC.address;

    let LTC_addr: string = config.Tokens.LTC.address;
    let USDT_addr: string = config.Tokens.USDT.address;

    let signers: SignerWithAddress[];
    let adapter: AdapterVenus;

    let vUSDT: IVBep20;
    let USDT: IERC20;

    let vLTC: IVBep20;
    let LTC: IERC20;

    let holderLTC: SignerWithAddress;
    let LTCBalance: BigNumber;

    let holderUSDT: SignerWithAddress;
    let USDTBalance: BigNumber;

    before(async function () {
        signers = await ethers.getSigners();

        // Deploying adapter
        adapter = <AdapterVenus>(await deployWithoutParams(ADAPTER_name));
        
        // Entering markets
        await adapter.enterMarkets([vLTC_addr, vUSDT_addr]);

        // Getting contract instances
        vUSDT = <IVBep20>(await ethers.getContractAt("IVBep20", vUSDT_addr));
        USDT = <IERC20>(await ethers.getContractAt("IERC20", USDT_addr));

        vLTC = <IVBep20>(await ethers.getContractAt("IVBep20", vLTC_addr));
        LTC = <IERC20>(await ethers.getContractAt("IERC20", LTC_addr));

        // Impersonating USDT holder
        const holderUSDTaddr = "0x85362633c6ab0bd39aaf73dd8586ac8e8e29c821";
        await hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [holderUSDTaddr],
        });
        holderUSDT = await ethers.getSigner(holderUSDTaddr);

        // Impersonating LTC holder
        const holderLTCaddr = "0xF977814e90dA44bFA03b6295A0616a897441aceC";
        await hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [holderLTCaddr],
        });
        holderLTC = await ethers.getSigner(holderLTCaddr);

        // Sending 100 ETH to the LTC holder
        signers = await ethers.getSigners();
        await signers[5].sendTransaction({
            to: holderLTCaddr,
            value: ethers.utils.parseEther("100")
        });

        // Sending 100 ETH to the USDT holder
        signers = await ethers.getSigners();
        await signers[5].sendTransaction({
            to: holderUSDTaddr,
            value: ethers.utils.parseEther("100")
        });
    });

    it("Check balance of the USDT holder", async () => {
        const balance = await USDT.balanceOf(holderUSDT.address);
        expect(balance).eq(BigNumber.from("200000000000000000"));

        USDTBalance = balance;
    });

    it("Check balance of the LTC holder", async () => {
        const balance = await LTC.balanceOf(holderLTC.address);
        expect(balance).eq(BigNumber.from("122543000000000000000000"))
        
        LTCBalance = balance; 
    });

    it("Lend some USDT", async () => {
        const mintAmount = USDTBalance.div(2);

        await USDT.connect(holderUSDT).approve(adapter.address, mintAmount);
        await adapter.connect(holderUSDT).mint(mintAmount, USDT_addr, vUSDT_addr);

        const balancevUSDT = await vUSDT.balanceOf(adapter.address);
        expect(balancevUSDT).eq(BigNumber.from("460148851"));
    }); 

    it("Borrow some tokens", async () => {
        const borrowAmount = 100;

        await adapter.borrow(borrowAmount, vLTC_addr);
        expect(await LTC.balanceOf(adapter.address)).eq(borrowAmount); 
    });

    it("Repay borrow", async () => {
        const repayAmount = 100;

        await adapter.repayBorrow(repayAmount, LTC_addr, vLTC_addr);
        expect(await LTC.balanceOf(adapter.address)).eq(0); 
    });

    it("Redeem USDT", async () => {
        const redeemAmount = BigNumber.from("460148851");

        await adapter.connect(holderUSDT).redeem(redeemAmount, USDT_addr, vUSDT_addr);
        expect(await USDT.balanceOf(holderUSDT.address)).above(USDTBalance);
    });
});

