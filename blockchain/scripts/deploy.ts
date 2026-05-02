import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("=================================================");
  console.log("  EifaSoft Token — BEP-20 Deployment");
  console.log("=================================================");
  console.log("Deployer address :", deployer.address);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Deployer balance :", ethers.formatEther(balance), "BNB");

  if (balance === 0n) {
    throw new Error("Deployer wallet has 0 BNB. Please fund it before deploying.");
  }

  console.log("\nDeploying EifaSoftToken...");

  const Token = await ethers.getContractFactory("EifaSoftToken");
  const token = await Token.deploy();

  await token.waitForDeployment();

  const address = await token.getAddress();

  console.log("\n✅ Token deployed successfully!");
  console.log("=================================================");
  console.log("Contract Address :", address);
  console.log("Token Name       :", await token.name());
  console.log("Token Symbol     :", await token.symbol());
  console.log("Total Supply     :", ethers.formatUnits(await token.totalSupply(), 18));
  console.log("Decimals         :", await token.decimals());
  console.log("Owner            :", await token.getOwner());
  console.log("=================================================");
  console.log("\nNext steps:");
  console.log(`1. Verify on BscScan:`);
  console.log(`   npx hardhat verify --network bscMainnet ${address}`);
  console.log(`2. View on BscScan:`);
  console.log(`   https://bscscan.com/token/${address}`);
  console.log(`3. Add to MetaMask: Contract address above`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error.message);
    process.exit(1);
  });
