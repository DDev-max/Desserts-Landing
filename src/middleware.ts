import { PAGE_URL, SERVER_URL } from '@/data/consts'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const origin = req.headers.get('origin')

  if (req.method !== 'GET') {
    return new NextResponse('Not Allowed. Only GET methods allowed', { status: 405 })
  }

  const res = NextResponse.next()
  const allowedOrigins = [SERVER_URL, PAGE_URL]
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse('Not allowed by server', { status: 403 })
  } else if (origin) {
    res.headers.set('Access-Control-Allow-Origin', origin)
  }

  res.headers.set('Vary', 'Origin')
  return res
}

export const config = {
  matcher: '/api/:path*',
}
