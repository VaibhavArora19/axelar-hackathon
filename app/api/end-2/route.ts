import { client } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const inputText: string = data.untrustedData.inputText;

  //@ts-ignore
  destinationChain = destinationChain.slice();

  const token = await client.get("address");
  const sourceChain = await client.get("sourceChain");
  const destChain = await client.get("destChain");
  const amount = await client.get("amount");

  return new NextResponse(`   
  <!DOCTYPE html>
      <html>
        <head>
        <title>Congratulations</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmeGjKsxNp1cTi75r3GPNwXsNgBP3ciZ56xbfdmczStb8D"/>
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/home"/>
          <meta property="fc:frame:button:1" content="Transfer token" />
          <meta property="fc:frame:button:1:action" content="link"/>
          <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/send?token=${token}&amount=${amount}&sourceChain=${sourceChain}&destChain=${destChain}$recipient=${inputText}"/>
          </head>
      </html>
  `);
}
