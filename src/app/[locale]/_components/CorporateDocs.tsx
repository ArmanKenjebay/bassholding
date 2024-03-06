'use client'

import React from 'react'
import { FinDocs, FinDocsAttribute } from '@/app/[locale]/_types/TFinDocs'
import { Locale } from '@/i18n-config'
import ArrowSvg from '@/app/[locale]/_components/ArrowSvg'

type Props = {
  data: FinDocs
  locale: Locale
  dictionary: any
}

export default function CorporateDocs({ data, locale, dictionary }: Props) {
  const api = process.env.NEXT_PUBLIC_BACKEND_API_FILE

  const getName = (locale: Locale, data: FinDocsAttribute) => {
    switch (locale) {
      case 'en':
        return data.name_en
      case 'ru':
        return data.name_ru
      case 'kk':
        return data.name_kz
      case 'th':
        return data.name_th
      default:
        return data.name_en
    }
  }

  const getDate = (data: string) => {
    return new Date(data).toLocaleDateString('ru')
  }

  return (
    <div className={`flex flex-col mt-5`}>
      <span
        className={`text-primary-gold xl:text-[36px] lg:text-[28px] md:text-[24px] sm:text-[21px] text-[16px] mb-5`}
      >
        {dictionary.corporateGovernance}
      </span>

      <div className={`flex gap-7 overflow-x-auto overflow-y-hidden pb-2`}>
        {data.data.map((year) => (
          <div
            className={`flex-1 min-w-[280px] xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] xl:h-[235px] w-full h-[125px] xl:rounded-2xl rounded-3xl flex flex-col justify-between bg-[#262626] p-5`}
            key={year.id}
          >
            {year.attributes.file.data.map((part, index) => (
              <div key={index}>
                <div className={`flex justify-between`}>
                  <span className={`md:text-[24px] text-[18px] truncate mr-1`}>
                    {getName(locale, year.attributes)}
                  </span>
                  <a
                    target={`_blank`}
                    href={api + part.attributes.url}
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
                  </a>
                </div>
                {year.attributes.date && (
                  <div>
                    <span className={`text-[16px] text-[#AFACAC]`}>
                      {year.attributes.date}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
