import { NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const res = await fetch(`${api}/both-prices?sort=createdAt:desc`, {
    headers,
  })

  const data = await res.json()

  console.log(data)

  return NextResponse.json(data)
}
