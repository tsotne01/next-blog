// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicRoutes = ["/", "/signin", "/signup"];

  const JWT_SECRET = process.env.JWT_PASSCODE;
  if (!JWT_SECRET) {
    console.error("JWT_SECRET environment variable is not set!");
    return NextResponse.redirect(
      new URL("/signin?error=no_secret", request.url),
    );
  }

  const authToken = request.cookies.get("auth_token")?.value;
  let isAuthenticated = false;

  if (authToken) {
    try {
      await jwtVerify(authToken, new TextEncoder().encode(JWT_SECRET));
      isAuthenticated = true;
    } catch (error) {
      console.error("JWT verification failed:", error);
      isAuthenticated = false;
      // Clear invalid token
      const response = NextResponse.redirect(
        new URL("/signin?error=expired_token", request.url),
      );
      response.cookies.delete("auth_token");
      return response;
    }
  }

  if (isAuthenticated) {
    if (publicRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/posts", request.url));
    }
    return NextResponse.next();
  } else {
    if (publicRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
