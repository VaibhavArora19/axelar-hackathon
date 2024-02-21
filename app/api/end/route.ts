import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const inputText: string = data.untrustedData.inputText;

  const sourceChain = inputText.split(",")[0];
  let destinationChain = inputText.split(",");

  //@ts-ignore
  destinationChain = destinationChain.slice();

  const output = await client.set("sourceChain", sourceChain);

  console.log("output", output);
  destinationChain.forEach(async (chain) => {
    await client.rpush("destinationChain", chain.trim());
  });

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Congratulations</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmeTa65VGaYty9s5tiBdqdQ78qZhWiAvcF49zaH8CrCVtD"/>
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/home"/>
          <meta property="fc:frame:button:1" content="Mint tokens" />
          <meta property="fc:frame:button:1:action" content="link"/>
          <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/create"/>
          </head>
      </html>
  `);
}
