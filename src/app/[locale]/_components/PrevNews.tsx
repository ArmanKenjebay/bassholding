'use client'

import { Locale } from '@/i18n-config'
import { useRouter } from 'next-intl/client'
import ArrowSvg from '@/app/[locale]/_components/ArrowSvg'
import React from 'react'

type Props = {
  dictionary: any
  locale: Locale
  classNames?: string
}

export default function PrevNews({ locale, dictionary, classNames }: Props) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <span
      onClick={handleBack}
      lang={locale}
      className={`${
        classNames ? classNames : ''
      } cursor-pointer group flex items-center w-fit gap-x-[15px] xl:gap-x-[30px] text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-[20px] font-[300]`}
    >
      <div
        className={`rounded-[99px] w-[32px] h-[32px] flex items-center justify-center xl:w-[32px] xl:h-[32px] text-black bg-white ease-in-out duration-200 cursor-pointer group-hover:bg-primary-gold group-hover:text-white`}
      >
        <ArrowSvg classNames={`block group-hover:hidden rotate-180`} />
        <ArrowSvg
          classNames={`hidden group-hover:block origin-center rotate-[220deg]`}
          fillPath={'white'}
        />
      </div>
      {dictionary.prev_news}
    </span>
  )
}
