import { Locale } from '@/i18n-config'

export type News = {
  news: {
    id: string
    title: LocaleObject
    context: LocaleObject
    content: LocaleObject
    date: LocaleObject
    image: {
      preview: string
      main: string
      content: string
      sub_content: string
    }
    chips: LocaleObject[]
  }[]
}

type LocaleObject = {
  [key in Locale]: string
}
