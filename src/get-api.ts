import 'server-only'
import Parser from 'rss-parser'

import { TNews } from '@/app/[locale]/_types/TNews'

const news = {
  news: () =>
    import('./api/news.json').then(
      (module) => module.default,
    ) as Promise<TNews>,
}

export const getNews = async () =>
  await news
    .news()
    .then((n) => n.news.sort((a, b) => Number(b.id) - Number(a.id)))

export const getNewsById = async (id: string) =>
  news.news().then((res) => res.news.find((n) => n.id === id))

export const getKase = async () => {
  const parser = new Parser()
  return await parser.parseURL(`https://kase.kz/prices/rss1/`)
}
