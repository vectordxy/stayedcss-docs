import { setModeServer } from "@/src/utils/getClientModule";

export async function POST(request: Request) {
  const { mode } = await request.json();
  return setModeServer(mode);
}
