'use client'

import Link from 'next-intl/link'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  locale: 'en' | 'ru'
  dictionary: any
}

export default function PrevNews({ locale, dictionary }: Props) {
  return (
    <Link
      href={`/news`}
      lang={locale}
      className={`text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-[300]`}
    >
      {dictionary.prev_news}
    </Link>
  )
}
