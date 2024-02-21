import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data: any = await req.json();
  const buttonId = data.untrustedData.buttonIndex;
  const buttonIndex = +buttonId;

  if (buttonId === 1) {
    await client.set("sourceChain", "Base");
  } else if (buttonId === 2) {
    await client.set("sourceChain", "Fantom");
  } else if (buttonId === 3) {
    await client.set("sourceChain", "Polygon");
  } else {
    await client.set("sourceChain", "Bsc");
  }

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Amount</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPbie6bPDZJYLFzt9org9ZLZXXGmiSPUnNGNGXtqNhCTF"/>
          <meta property="fc:frame:button:1" content="Base" />
          <meta property="fc:frame:button:2" content="Fantom"/>
          <meta property="fc:frame:button:3" content content="Polygon"/>
          <meta property="fc:frame:button:4" content="Bsc"/>
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/recipient-address"/>
          </head>
      </html>
  `);
}

export const dynamic = "force-dynamic";
