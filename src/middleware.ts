import { baseURL } from '@/data/consts'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const origin = req.headers.get('origin')

  if (req.method !== 'GET') {
    return new NextResponse('Not Allowed. Only GET methods allowed', { status: 405 })
  }

  if (origin && origin !== baseURL) {
    return new NextResponse('Not allowed by server', { status: 403 })
  }

  const res = NextResponse.next()
  res.headers.set('Access-Control-Allow-Origin', baseURL)
  res.headers.set('Vary', 'Origin')
  return res
}

export const config = {
  matcher: '/api/:path*',
}
