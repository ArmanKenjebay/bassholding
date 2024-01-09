import { NextRequest, NextResponse } from 'next/server'
import { getMockNews } from '@/get-api'

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const res = await getMockNews()

    const response = res.map((el) => ({
      ...el,
      baseImg: require(`@/../public/images/${el.image.main}`),
    }))

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
    console.error('Ошибка при получении новостей:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
