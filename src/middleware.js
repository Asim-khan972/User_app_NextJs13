import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("middleware ...");
  if (req.nextUrl.pathname != "/login")
    return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/about/:path*", "/study/:path*"],
};
