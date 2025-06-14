// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicPaths = ["/signin", "/signup", "/"];

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const JWT_SECRET = process.env.JWT_PASSCODE;

  if (!JWT_SECRET) {
    console.error("JWT_SECRET environment variable is not set!");
    const response = NextResponse.redirect(
      new URL("/signin?error=no_secret", request.url),
    );
    return response;
  }

  const authToken = request.cookies.get("auth_token")?.value;
  let isAuthenticated = false;

  if (authToken) {
    try {
      await jwtVerify(authToken, new TextEncoder().encode(JWT_SECRET));
      isAuthenticated = true;
    } catch (error) {
      console.error(
        "JWT verification failed for path:",
        pathname,
        "Error:",
        error,
      );
      isAuthenticated = false;

      const response = NextResponse.redirect(
        new URL(`/signin?from=${pathname}&error=expired_token`, request.url),
      );
      response.cookies.delete("auth_token");
      return response;
    }
  }

  if (!isAuthenticated) {
    const response = NextResponse.redirect(
      new URL(`/signin?from=${pathname}`, request.url),
    );
    if (authToken && !isAuthenticated) {
      response.cookies.delete("auth_token");
    }
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
