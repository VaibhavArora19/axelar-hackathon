"use client";
import { ethers } from "ethers";

import { useState } from "react";
import { interchainTransfer } from "@/helpers";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Send() {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner]: any = useState();
  const searchParams = useSearchParams();
  const destChain: any = searchParams.get("destChain");
  const sourceChain: any = searchParams.get("sourceChain");
  const recipient: any = searchParams.get("recipient");
  const amount: any = searchParams.get("amount");
  const token: any = searchParams.get("token");

  const connectWalletHandler = async () => {
    //@ts-ignore
    let provider = new ethers.BrowserProvider(window.ethereum);

    let signer = await provider.getSigner();
    setSigner(signer);

    setIsConnected(true);
  };

  const transferTokensHandler = async () => {
    // @ts-ignore
    await interchainTransfer(
      sourceChain,
      destChain,
      recipient,
      amount,
      token,
      signer
    );
  };

  return (
    <Suspense>
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
    </Suspense>
  );
}
