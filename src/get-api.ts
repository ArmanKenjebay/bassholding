import 'server-only'

import {TNewsMock} from '@/app/[locale]/_types/TNewsMock'
import {Locale} from "@/i18n-config";
import {TNews, TNewsById} from "@/app/[locale]/_types/TNews";

const token = process.env.NEXT_PUBLIC_TOKEN
const api = process.env.NEXT_PUBLIC_BACKEND_API
const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
}

const news = {
    news: () =>
        import('./api/news.json').then(
            (module) => module.default,
        ) as Promise<TNewsMock>,
}

export const getMockNews = async () =>
    await news
        .news()
        .then((n) => n.news.sort((a, b) => Number(b.id) - Number(a.id)))

export const getMockNewsById = async (id: string) =>
    news.news().then((res) => res.news.find((n) => n.id === id))


export const getNews = async (locale: Locale): Promise<TNews> => {
    const response = await fetch(`${api}/news?locale=${locale}&populate=*`, {headers})
    return await response.json()
}

export const getNewsById = async (locale: Locale, id: number): Promise<TNewsById> => {
    const response = await fetch(`${api}/news/${id}?locale=${locale}&populate=*`, {headers})
    return await response.json()
}