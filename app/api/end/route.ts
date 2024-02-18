import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const inputText: string = data.untrustedData.inputText;

  const sourceChain = inputText.split(",")[0];
  let destinationChain = inputText.split(",");

  //@ts-ignore
  destinationChain = destinationChain.shift();

  client.set("sourceChain", sourceChain);

  destinationChain.forEach(async (chain) => {
    client.rPush("destinationChain", chain);
  });

  const headers = new Headers();
  headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}/`);

  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    { headers: headers, status: 302 }
  );

  return response;
}
