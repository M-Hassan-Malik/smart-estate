const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
 

    describe('Escrow',async () => {
        const RealEstate = await ethers.getContractFactory('RealEstate'),
        realEstate =   await RealEstate.deploy();
     
        console.log(realEstate.address);
    })

})
