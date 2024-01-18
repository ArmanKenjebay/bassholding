'use client'

import React from 'react'
import { Chip } from '@nextui-org/chip'
import { useRouter } from 'next-intl/client'
import Span from '@/app/[locale]/_components/Span'
import ArrowSvg from '@/app/[locale]/_components/ArrowSvg'

type Props = {
  locale: string
  id: string
  content: string
  chip: string
  date?: string
}
export default function NewsLine({ locale, id, content, chip, date }: Props) {
  const router = useRouter()
  const handleRedirect = (id: string, locale: string) => {
    router.push(`/news/${id}`, { locale: locale })
  }

  return (
    <div className="w-full grid grid-cols-[3fr_1fr_1fr_50px] gap-x-5 gap-y-3 items-center justify-center px-1">
      <div className="flex justify-start sm:col-span-1 col-span-4">
        <Span classNames={`text-xs md:text-[20px] font-[300] leading-normal`}>
          {content}
        </Span>
      </div>

      <div className="flex justify-center gap-x-3 sm:col-span-1 col-span-2">
        {chip && (
          <Chip
            variant="bordered"
            color="warning"
            className={`text-xs lg:text-base font-[400]`}
            classNames={{
              base: 'truncate',
              content: 'p-0 sm:p-1 truncate',
            }}
          >
            {chip}
          </Chip>
        )}
      </div>

      <div
        className={`flex whitespace-nowrap justify-center sm:col-span-1  text-xs md:text-[20px] font-[300]`}
      >
        {date ?? <span>{date}</span>}
      </div>

      <div className={`flex justify-end sm:col-span-1`}>
        <div
          onClick={() => handleRedirect(id, locale)}
          className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
        >
          <ArrowSvg
            classNames={`block group-hover:hidden`}
            width={'24'}
            height={'24'}
          />
          <ArrowSvg
            classNames={`hidden group-hover:block origin-center -rotate-45`}
            fillPath={'white'}
            width={'24'}
            height={'24'}
          />
        </div>
      </div>
    </div>
  )
}
