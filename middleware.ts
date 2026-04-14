import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.headers.set("x-custom-header", "hello-from-middleware");
  return response;
}
