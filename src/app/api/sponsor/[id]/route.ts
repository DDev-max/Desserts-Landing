import { sponsor } from '@/data/consts'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

interface GetFaqProps {
  params: Promise<{
    id?: string
  }>
}

export async function GET(_request: NextRequest, { params }: GetFaqProps) {
  const id = (await params).id
  const sponsorId = sponsor.find(el => el.id == id)

  if (sponsorId) return NextResponse.json(sponsorId)
  else return NextResponse.json('Invalid ID')
}
