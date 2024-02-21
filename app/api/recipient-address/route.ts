import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data: any = await req.json();
  const buttonId = data.untrustedData.buttonIndex;
  const buttonIndex = +buttonId;

  if (buttonId === 1) {
    await client.set("destChain", "Base");
  } else if (buttonId === 2) {
    await client.set("destChain", "Fantom");
  } else if (buttonId === 3) {
    await client.set("destChain", "Polygon");
  } else {
    await client.set("destChain", "Bsc");
  }

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Amount</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmbxPZ4KkQSEucbcCEst3EguzmentwkfpsGYi2eBvqBsSb"/>
          <meta property="fc:frame:input:text" content="Recipient address"/>
          <meta property="fc:frame:button:1" content="Next" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end-2"/>
          </head>
      </html>
  `);
}

export const dynamic = "force-dynamic";
