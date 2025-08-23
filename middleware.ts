// middleware.ts - place this in project root (same level as package.json)

import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
    console.log('🚀 Middleware hit:', request.nextUrl.pathname);

    // Check if path starts with /admin
    if (request.nextUrl.pathname.startsWith('/admin')) {
        console.log('🔄 Redirecting /admin to /signin');
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    // Important: Return NextResponse.next() for all other routes
    return NextResponse.next();
}

// Optional: Configure which paths this middleware runs on
export const config = {
    matcher: [
        // Run on all routes except static files and API routes
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}