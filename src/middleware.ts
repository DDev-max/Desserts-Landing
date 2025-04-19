import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.method !== 'GET') {
    return new NextResponse('Not Allowed. Only GET methods allowed', { status: 405 })
  }

  const res = NextResponse.next()
  res.headers.set('Access-Control-Allow-Origin', '*')
  return res
}

export const config = {
  matcher: '/api/:path*',
}
