import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = NextResponse.json({ success: true, received: body });
    return response;
  } catch (error) {
    console.error("Error parsing request:", error);
    return NextResponse.json({ success: false, error: "Invalid request" });
  }
}
