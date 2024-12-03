import { setModeServer } from "@/app/utils/getClientModule";

export async function POST(request: Request) {
  const { mode } = await request.json();
  return setModeServer(mode);
}
