import 'server-only'
import { TNews } from '@/app/[locale]/_types/TNews'

const news = {
  news: () =>
    import('./api/news.json').then(
      (module) => module.default,
    ) as Promise<TNews>,
}

export const getNews = async () =>
  await news.news().then((n) => n.news.sort((a, b) => b.id.localeCompare(a.id)))

export const getNewsById = async (id: string) =>
  news.news().then((res) => res.news.find((n) => n.id === id))
