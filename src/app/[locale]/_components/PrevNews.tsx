'use client'

import Link from 'next-intl/link'

type Props = {
  dictionary: any
  locale: 'en' | 'ru'
  classNames?: string
}

export default function PrevNews({ locale, dictionary, classNames }: Props) {
  return (
    <Link
      href={`/news`}
      lang={locale}
      className={`${
        classNames ? classNames : ''
      } group flex items-center w-fit gap-x-[15px] xl:gap-x-[30px] text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-[300]`}
    >
      <div
        className={`rounded-[99px] w-[32px] h-[32px] flex items-center justify-center xl:w-[56px] xl:h-[56px] text-black bg-white ease-in-out duration-200 cursor-pointer group-hover:bg-primary-gold group-hover:text-white`}
      >
        &#8592;
      </div>
      {dictionary.prev_news}
    </Link>
  )
}
