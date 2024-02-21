import { NextResponse } from 'next/server'

export async function POST(request: Request, context: any) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const requestBody = await request.json()

  const res = await fetch(`${api}/get-quotes?populate=*&sort=createdAt:desc`, {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody),
  })

  const data = await res.json()

  return NextResponse.json(data)
}
