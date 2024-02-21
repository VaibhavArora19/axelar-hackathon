"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Page() {
  const [tokenInfo, setTokenInfo] = useState({
    name: null,
    symbol: null,
    amount: null,
    sourceChain: null,
    destinationChain: null,
  });

  const getData = async () => {
    const data = await fetch("http://localhost:3000/api/token-info", {
      cache: "no-store",
    });

    const response = await data.json();

    console.log("resop", response);
  };

  const createTokenHandler = async () => {
    const bytes = ethers.utils.randomBytes(32);

    const salt = ethers.utils.hexlify(bytes);
  };

  useEffect(() => {
    getData();
  }, []);
  return <h1>Redirecting....</h1>;
}
