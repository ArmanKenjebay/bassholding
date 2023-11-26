'use client'

import { Locale } from '@/i18n-config'

type Props = {
  params: {
    locale: Locale
    news: any[]
  }
}
export default function NewsPreviews({ params: { locale } }: Props) {}
