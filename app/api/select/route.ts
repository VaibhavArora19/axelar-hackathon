import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data: any = await req.json();
  console.log("data is", data);
  const buttonId = data.untrustedData.buttonIndex;

  if (buttonId === 1) {
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Create new token</title>
          <meta property="fc:frame" content="vNext"/>
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSQqNgT3qRb3W3nV5K6xw3WTa68KoNAL8U1R7sh9LDXt9" />
          <meta property="fc:frame:input:text" content="Token name"/>
          <meta property="fc:frame:input:text" content="Token symbol"/>
      </head>
      </html>
    `);
  } else {
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Create new token</title>
          <meta property="fc:frame" content="vNext"/>
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSQqNgT3qRb3W3nV5K6xw3WTa68KoNAL8U1R7sh9LDXt9" />
          <meta property="fc:frame:input:text" content="Token name"/>
          <meta property="fc:frame:input:text" content="Token symbol"/>
      </head>
      </html>
    `);
  }
}

export const dynamic = "force-dynamic";
