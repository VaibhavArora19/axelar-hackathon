import { ethers, Contract } from "ethers";
import { TOKEN_FACTORY_ABI, TOKEN_FACTORY_ADDRESS } from "@/constants";
export const createToken = async (
  chains: string[],
  minter: string,
  fromChain: string,
  name: string,
  symbol: string,
  decimals: Number,
  initialSupply: Number,
  signer: any
) => {
  try {
    const contract = new Contract(
      TOKEN_FACTORY_ADDRESS,
      TOKEN_FACTORY_ABI,
      signer
    );
    console.log(contract);
    const abiCoder = new ethers.AbiCoder();
    const saltbytes = abiCoder.encode(["uint256"], [145333422435434]);
    let iface: any = new ethers.Interface(TOKEN_FACTORY_ABI);
    let data = [];
    const gasValue = 121210000000000;
    data.push(
      iface.encodeFunctionData("deployInterchainToken", [
        saltbytes,
        name,
        symbol,
        decimals,
        initialSupply,
        minter,
      ])
    );
    for (let i = 0; i < chains.length; i++) {
      data.push(
        iface.encodeFunctionData("deployRemoteInterchainToken", [
          fromChain,
          saltbytes,
          minter,
          chains[i],
          gasValue,
        ])
      );
    }
    console.log(data);
    const tx = await contract.multicall(data, { value: "121210000000000" });
    await tx.wait();
  } catch (e) {
    console.log(e, "Create Token");
  }
};
export const interchainTransfer = async (
  destinationChain: string,
  recipient: string,
  amount: string,
  signer: any
) => {
  try {
    const contract = new Contract(
      TOKEN_FACTORY_ADDRESS,
      TOKEN_FACTORY_ABI,
      signer
    );
    const tx = await contract.interchainTransfer(
      destinationChain,
      recipient,
      ethers.parseEther(amount),
      "0x"
    );
    await tx.wait();
  } catch (e) {
    console.log(e, "Create Token");
  }
};
