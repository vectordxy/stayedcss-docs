import { saveScreenMode } from "stayedcss/client";

export async function POST(request: Request) {
  const { mode } = await request.json();
  return saveScreenMode(mode);
}
