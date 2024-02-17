import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Send or create Token</title>
                <meta property="fc:frame" content="vNext"/>
                <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdTG2HQJmdnmiuAXKfL7wUXnJYvHtq4TzmYHKKYMtEQkV" />
                <meta property="fc:frame:button:1" content="Option A" />
                <meta property="fc:frame:button:1:action" content="post_redirect"/>
                <meta property="fc:frame:button:2" content="Option B"/>
                <meta property="fc:frame:button:2:action" content="post_redirect"/>
                <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end"/>
            </head>
            </html>
        `);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
