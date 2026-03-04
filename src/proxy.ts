import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  // step-1 if no token
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // step-2 verify jwt signature and expiraion
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ['HS256'],
      issuer: 'http://localhost:5206',
      audience: 'http://localhost:3000/',
    });

    const role = payload.role as string;

    //step-3 admin routes
    if (pathname.startsWith("/admin") && role !== "Admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    //step-4 student-routes
    if (pathname.startsWith("/student") && role !== "Student") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    // 🔹 Step 5: Teacher routes
    if (pathname.startsWith("/teacher") && role !== "Teacher") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    // 🔹 Step 6: Parent routes
    if (pathname.startsWith("/parent") && role !== "Parent") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  } catch (error) {
    //invalid token or expired
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/student/:path*",
    "/teacher/:path*",
    "/parent/:path*",
  ],
};