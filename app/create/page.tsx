"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { createToken } from "@/helpers";

export default function Page() {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner]: any = useState();
  const [tokenInfo, setTokenInfo]: any = useState({
    name: null,
    symbol: null,
    amount: null,
    sourceChain: null,
    destinationChain: null,
  });

  const connectWalletHandler = async () => {
    //@ts-ignore
    let provider = new ethers.BrowserProvider(window.ethereum);

    let signer = await provider.getSigner();
    setSigner(signer);

    setIsConnected(true);
  };

  const mintTokensHandler = async () => {
    const account = await signer.getAddress();
    // @ts-ignore
    await createToken(
      tokenInfo.destinationChain,
      account,
      tokenInfo.sourceChain,
      tokenInfo.name,
      tokenInfo.symbol,
      18,
      tokenInfo.amount,
      signer
    );
    // await createToken(
    //   ["fantom", "Celo"],
    //   account,
    //   "Base",
    //   "dien",
    //   "dien",
    //   18,
    //   100000000000,
    //   signer
    // );
  };

  return (
    <div className="flex justify-center flex-col mt-20">
      <button
        onClick={connectWalletHandler}
        className="w-48 rounded-lg h-10 m-auto bg-blue-500 text-xl"
      >
        {isConnected ? "Wallet connected" : "Connect Wallet"}
      </button>
      <button
        className="bg-green-400 w-48 h-10 m-auto rounded-lg mt-4"
        onClick={mintTokensHandler}
      >
        Mint tokens
      </button>
    </div>
  );
}
