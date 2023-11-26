import { TLocaleObject } from '@/app/[locale]/_types/TLocaleObject'

export type TNews = {
  news: TNewsData[]
}

export type TNewsData = {
  id: string
  title: TLocaleObject
  context: TLocaleObject
  content: TLocaleObject
  date: TLocaleObject
  image: {
    preview: string
    main: string
    content: string
    sub_content: string
  }
  chips: TLocaleObject[]
  baseImg?: any
}
