import { NextRequest, NextResponse } from "next/server";
import { client } from "@/app/lib/db";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const inputText = data.untrustedData.inputText;
  console.log("input", data);
  await client.set("name", inputText);

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Token symbol</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmeTMnY7rckLdH4WSW3pHD8hiYLeLTrjqsrcwTiu5f8X7S"/>
          <meta property="fc:frame:input:text" content="Token symbol"/>
          <meta property="fc:frame:button:1" content="Next" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/token-amount"/>
          </head>
      </html>
  `);
}

export const dynamic = "force-dynamic";
