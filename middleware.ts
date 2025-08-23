// middleware.ts - place this in project root (same level as package.json)

import { NextResponse } from 'next/server'

export function middleware() {
  console.log('🚀🚀🚀 MIDDLEWARE IS WORKING! 🚀🚀🚀')
  
  const response = NextResponse.next()
  response.headers.set('x-test-middleware', 'working')
  
  return response
}