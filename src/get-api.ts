import 'server-only'

import { TNews } from '@/app/[locale]/_types/TNews'

const news = {
  news: () =>
    import('./api/news.json').then(
      (module) => module.default,
    ) as Promise<TNews>,
}

export const getMockNews = async () =>
  await news
    .news()
    .then((n) => n.news.sort((a, b) => Number(b.id) - Number(a.id)))

export const getMockNewsById = async (id: string) =>
  news.news().then((res) => res.news.find((n) => n.id === id))
