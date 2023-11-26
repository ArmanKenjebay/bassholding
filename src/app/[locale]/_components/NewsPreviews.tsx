'use client'

import { Locale } from '@/i18n-config'
import { TNews } from '@/app/[locale]/_types/TNews'

type Props = {
  params: {
    locale: Locale
    news: TNews
  }
}
export default function NewsPreviews({ params: { locale } }: Props) {}
