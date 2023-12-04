import { NextRequest, NextResponse } from 'next/server'
import Parser from 'rss-parser'

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const parser = new Parser()
    const response = await parser.parseURL('https://kase.kz/prices/rss1/')

    return new Response(JSON.stringify(response), {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (e) {
    console.error(e)
    return new Response('Internal Server Error', { status: 500 })
  }
}
