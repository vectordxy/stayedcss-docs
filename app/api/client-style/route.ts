import { NextResponse } from "next/server";
import { stayedDarkStyle, stayedStyle } from "stayedcss";

export async function POST(request: Request) {
  try {
    const { data, mode } = await request.json();

    if (mode === "default") {
      stayedStyle(data);
    } else if (mode === "dark") {
      stayedDarkStyle(data);
    }
    return NextResponse.json({
      result: data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process POST request" },
      { status: 400 }
    );
  }
}
