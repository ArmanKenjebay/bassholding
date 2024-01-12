import TopsAccordion from '@/app/[locale]/_components/TopsAccordion'
import React from 'react'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import InvestorDictionaryAccordion from '@/app/[locale]/_components/InvestorDictionaryAccordion'

export default async function Press({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <div className={`flex flex-col h-full xl:mb-10 mb-5`}>
      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <span
          className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] mb-5`}
        >
          СПРАВОЧНИК ДЛЯ ИНВЕСТОРОВ
        </span>

        <InvestorDictionaryAccordion dictionary={dictionary} />
      </div>
    </div>
  )
}
