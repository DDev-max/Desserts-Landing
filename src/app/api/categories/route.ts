import { categories } from '@/data/consts'
import { NextResponse } from 'next/server'

export const GET = async () => NextResponse.json(categories)
