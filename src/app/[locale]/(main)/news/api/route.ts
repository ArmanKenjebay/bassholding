import {NextRequest, NextResponse} from 'next/server'
import {getNews} from '@/get-api'
import {Locale} from "@/i18n-config";

export async function GET(request: NextRequest, response: NextResponse) {
    console.log(request.nextUrl)
    const pathName = request.nextUrl.pathname
    console.log('pathName', pathName)
    const pathSegments = pathName.split('/');
    const locale = pathSegments[1];

    try {
        const test = await getNews(locale as Locale)

        return new Response(JSON.stringify(test), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        console.error(error)
        console.error('Ошибка при получении новостей:', error)
        return new Response('Internal Server Error', {status: 500})
    }
}
