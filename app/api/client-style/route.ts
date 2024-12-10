import { applyStyle } from "@/src/utils/getModule";
import { NextResponse } from "next/server";
import { stayedStyle } from "../../../node_modules/stayedcss/src";

export async function GET(request: Request) {
  return NextResponse.json({ hello: "world" });
}

export async function POST(request: Request) {
  try {
    // POST 요청의 body를 가져옴
    const body = await request.json();
    stayedStyle(body);
    // 받은 데이터를 처리하고 응답 반환
    return NextResponse.json({
      message: "This is a POST request",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process POST request" },
      { status: 400 }
    );
  }
}
