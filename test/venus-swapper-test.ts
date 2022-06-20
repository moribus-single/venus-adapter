import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import hre, { ethers } from "hardhat";
import { IERC20, IVBep20, AdapterVenus } from "../typechain"

import config from "./config"
import { deployWithoutParams } from "./helpers"

describe("Venus adapter", function () {
    let ADAPTER_name: string = config.AdapterVenus.name;
    
    let signers: SignerWithAddress[];
    let adapter: AdapterVenus;

    before(async function () {
        signers = await ethers.getSigners();

        // Deploying adapter
        adapter = <AdapterVenus>(await deployWithoutParams(ADAPTER_name));
    });

    describe("Lend USDT", function () {
        let vUSDT_addr: string = config.vTokens.vUSDT.address;
        let USDT_addr: string = config.Tokens.USDT.address;

        let vUSDT: IVBep20;
        let USDT: IERC20;

        let holderUSDT: SignerWithAddress;
        let holderBalance: BigNumber;

        before(async function () {
            // Getting contract instances
            vUSDT = <IVBep20>(await ethers.getContractAt("IVBep20", vUSDT_addr));
            USDT = <IERC20>(await ethers.getContractAt("IERC20", USDT_addr));

            // Impersonating USDT holder
            const holderUSDTaddr = "0x85362633c6ab0bd39aaf73dd8586ac8e8e29c821";
            await hre.network.provider.request({
                method: "hardhat_impersonateAccount",
                params: [holderUSDTaddr],
            });
            holderUSDT = await ethers.getSigner(holderUSDTaddr);

            // Sending 100 ETH to the USDT holder
            signers = await ethers.getSigners();
            await signers[5].sendTransaction({
                to: holderUSDTaddr,
                value: ethers.utils.parseEther("100")
            });

            // Entering markets from the adapter
            await adapter.enterMarkets([vUSDT_addr]);
        });

        it("Check balance of the USDT holder", async () => {
            const balance = await USDT.balanceOf(holderUSDT.address);
            expect(balance).eq(BigNumber.from("200000000000000000"));

            holderBalance = balance;
        });

        it("Lend some USDT to the vUSDT market from USDT holder", async () => {
            const mintAmount = holderBalance.div(2);

            await USDT.connect(holderUSDT).approve(adapter.address, holderBalance);
            await adapter.connect(holderUSDT).mint(mintAmount, USDT_addr, vUSDT_addr);

            const balancevUSDT = await vUSDT.balanceOf(holderUSDT.address);
            expect(balancevUSDT).eq(BigNumber.from("460148852"));
        });

        it("Redeem USDT back to holder", async () => {
            const redeemAmount = BigNumber.from("460148852");

            await vUSDT.connect(holderUSDT).approve(adapter.address, redeemAmount);
            await adapter.connect(holderUSDT).redeem(redeemAmount, USDT_addr, vUSDT_addr);

            expect(await USDT.balanceOf(holderUSDT.address)).above(holderBalance);
        });


    });
});
