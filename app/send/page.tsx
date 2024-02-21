"use client";

import { useState } from "react";

export default function Page() {
  const [isConnected, setIsConnected] = useState(false);

  const connectWalletHandler = async () => {
    //@ts-ignore
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    //@ts-ignore
    const chainId = await window?.ethereum.request({ method: "eth_chainId" });

    setIsConnected(true);
  };

  const transferTokensHandler = () => {};

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
