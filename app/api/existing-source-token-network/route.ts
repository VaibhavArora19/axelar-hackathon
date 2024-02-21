import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();

  const amount = data.untrustedData.inputText;

  await client.set("amount", amount);

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Amount</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPmq7MpeSGouTXfTnWgk4MRF21ABF526EE6NeVjccSTfm"/>
          <meta property="fc:frame:button:1" content="Base" />
          <meta property="fc:frame:button:2" content="Fantom"/>
          <meta property="fc:frame:button:3" content content="Polygon"/>
          <meta property="fc:frame:button:4" content="Bsc"/>
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/existing-dest-token-network"/>
          </head>
      </html>
  `);
}

export const dynamic = "force-dynamic";
