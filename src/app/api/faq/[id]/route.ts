import { faq } from '@/data/consts'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

interface GetFaqProps {
  params: Promise<{
    id?: string
  }>
}

export async function GET(request: NextRequest, { params }: GetFaqProps) {
  const id = (await params).id
  const faqId = faq.find(el => el.id == id)

  if (faqId) return NextResponse.json(faqId)
  else return NextResponse.json('Invalid ID')
}
