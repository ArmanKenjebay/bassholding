import { NextRequest, NextResponse } from 'next/server'
import { getNews } from '@/get-api'

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const res = await getNews()
    const newsData = await res.news // Распаковываем промис

    return new Response(JSON.stringify(newsData), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Ошибка при получении новостей:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
