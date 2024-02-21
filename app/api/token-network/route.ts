import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const inputText = data.untrustedData.inputText;

  await client.set("amount", inputText);

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Token networks</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmeTa65VGaYty9s5tiBdqdQ78qZhWiAvcF49zaH8CrCVtD"/>
          <meta property="fc:frame:input:text" content="Token networks"/>
          <meta property="fc:frame:button:1" content="Next" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end"/>
          </head>
      </html>
  `);
}
