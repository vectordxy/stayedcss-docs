import { setModeServer } from "@/app/css-module/getClientModule";

export async function POST(request: Request) {
  const { mode } = await request.json();
  return setModeServer(mode);
}
