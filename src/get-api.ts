import 'server-only'

const news = {
  news: () => import('./api/news.json').then((module) => module.default),
}

export const getNews = async () => news.news()

export const getNewsById = async (id: string) =>
  news.news().then((res) => res.news.find((n) => n.id === id))
