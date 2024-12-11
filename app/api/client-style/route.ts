import { applyDarkStyle, applyStyle } from "@/src/utils/getModule";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data, mode } = await request.json();

    if (mode === "default") {
      applyStyle(data);
    } else if (mode === "dark") {
      applyDarkStyle(data);
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
