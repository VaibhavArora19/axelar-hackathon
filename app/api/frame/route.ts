import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParam = req.nextUrl.searchParams;
  const id: any = searchParam.get("id");
  const idAsNumber = +id;

  const nextId = idAsNumber - 1;

  if (idAsNumber === 7) {
    return new NextResponse(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>This is frame 7</title>
                <meta property="fc:frame" content="vNext"/>
                <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmXo6HDriJCfN3JxR8Z6emT8vbxUUsN94B3V1Fr7fvUEyW" />
                <meta property="fc:frame:button:1" content="Visit cosmicboys.cloud" />
                <meta property="fc:frame:button:1:action" content="post_redirect"/>
                <meta property="fc:frame:button:2" content="Learn how this was made"/>
                <meta property="fc:frame:button:2:action" content="post_redirect"/>
                <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end"/>
            </head>
            </html>
        `);
  } else {
    return new NextResponse(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>This is frame ${id}</title>
        <meta property="fc:frame" content="vNext"/>
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmXo6HDriJCfN3JxR8Z6emT8vbxUUsN94B3V1Fr7fvUEyW"/>
        <meta property="fc:frame:button:1" content="Next Page" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}"/>
        </head>
        </html>
    `);
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
