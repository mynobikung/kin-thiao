import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const ADMIN_ROLES = ["SUPER_ADMIN", "ADMIN", "EDITOR", "MODERATOR"];

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // ป้องกัน /admin routes
    if (pathname.startsWith("/admin")) {
      if (!token) {
        const loginUrl = new URL("/api/auth/signin", req.url);
        loginUrl.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(loginUrl);
      }

      if (!ADMIN_ROLES.includes(token.role as string)) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // Banned/Suspended users cannot access admin
      if (token.status === "BANNED" || token.status === "SUSPENDED") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // Let the middleware function handle auth
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
