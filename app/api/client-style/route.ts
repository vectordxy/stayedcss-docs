import { NextResponse } from "next/server";
import { stayedStyle } from "../../../node_modules/stayedcss/src";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    stayedStyle(body);
    return NextResponse.json({
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process POST request" },
      { status: 400 }
    );
  }
}
