import { client } from "@/app/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const name = await client.get("name");
  const symbol = await client.get("symbol");
  const amount = await client.get("amount");

  const sourceChain = await client.get("sourceChain");
  const destinationChain = await client.get("destinatonChain");

  return Response.json({ name, symbol, amount, sourceChain, destinationChain });
}
