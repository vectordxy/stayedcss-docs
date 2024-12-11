import { postStyles } from "@/src/utils/getModule";

export async function POST(request: Request) {
  return await postStyles(request);
}
