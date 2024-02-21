"use client";
import { ethers } from "ethers";

import { useState } from "react";
import { interchainTransfer } from "@/helpers";

export default function Page() {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner]: any = useState();
  const connectWalletHandler = async () => {
    //@ts-ignore
    let provider = new ethers.BrowserProvider(window.ethereum);

    let signer = await provider.getSigner();
    setSigner(signer);

    setIsConnected(true);
  };

  const transferTokensHandler = async () => {
    const account: any = await signer.getAddress();
    // @ts-ignore
    await interchainTransfer(
      "fantom",
      account,
      "100000",
      "0x04e964aAe31EDa657510F839135F3462DC8CEAbe",
      signer
    );
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
        onClick={transferTokensHandler}
      >
        Transfer tokens
      </button>
    </div>
  );
}
