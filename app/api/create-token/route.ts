import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data: any = req.json();
  console.log("data", data);

  const headers = new Headers();
  headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}`);

  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/token`,
    { headers: headers, status: 302 }
  );

  return response;
}

export const dynamic = "force-dynamic";
