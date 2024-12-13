import { requestStyles } from "stayedcss";

export function POST(request: Request) {
  return requestStyles(request);
}
