import { ethers } from "hardhat";

export async function deployWithoutParams(contractName: string) {
    const factory = await ethers.getContractFactory(contractName);
    const contract = await factory.deploy();
    contract.deployed();

    return contract;
}