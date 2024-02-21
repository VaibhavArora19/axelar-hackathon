import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();

  const tokenAddress = data.untrustedData.inputText;

  await client.set("address", tokenAddress);

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Amount</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmPbie6bPDZJYLFzt9org9ZLZXXGmiSPUnNGNGXtqNhCTF"/>
          <meta property="fc:frame:input:text" content="Token amount"/>
          <meta property="fc:frame:button:1" content="Next" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/existing-source-token-network"/>
          </head>
      </html>
  `);
}

export const dynamic = "force-dynamic";
