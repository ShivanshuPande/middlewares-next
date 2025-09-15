
import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
    console.log('Middleware hit:', request.nextUrl.pathname);

    if (request.nextUrl.pathname.startsWith('/admin')) {
        console.log(' Redirecting /admin to /signin');
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Run on all routes except static files and API routes
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
