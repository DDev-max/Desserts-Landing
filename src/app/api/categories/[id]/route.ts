import { categories } from '@/data/consts'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

interface GetFaqProps {
  params: Promise<{
    id?: string
  }>
}

export async function GET(request: NextRequest, { params }: GetFaqProps) {
  const id = (await params).id
  const catId = categories.find(el => el.id == id)

  if (catId) return NextResponse.json(catId)
  else return NextResponse.json('Invalid ID')
}
