import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req });

  const { pathname } = req.nextUrl;

  // Not logged in
  if (!token) {
    if (
      pathname.startsWith("/admin") ||
      pathname.startsWith("/student") ||
      pathname.startsWith("/super-admin")
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Role-based protection
  if (pathname.startsWith("/admin") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/student") && token?.role !== "student") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/super-admin") && token?.role !== "superadmin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/student/:path*", "/super-admin/:path*"],
};