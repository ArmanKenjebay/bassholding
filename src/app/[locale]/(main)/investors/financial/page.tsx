import React from 'react'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import TopsAccordion from '@/app/[locale]/_components/TopsAccordion'
import FinancialCalendar from '@/app/[locale]/_components/FinancialCalendar'
import CorporateDocs from '@/app/[locale]/_components/CorporateDocs'
import { AnnualsDocs } from '@/app/[locale]/_types/TFinDocs'

export default async function Financial({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  let corporateDocs: AnnualsDocs | undefined = undefined

  const corporateDocsResponse = await fetch(
    `${api}/documents?populate=*&sort=id:desc`,
    {
      headers,
      cache: 'no-cache',
    },
  )

  if (corporateDocsResponse.ok) {
    corporateDocs = await corporateDocsResponse.json()
  }

  return (
    <div className={`flex flex-col h-full xl:mb-10 mb-5`}>
      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        {corporateDocs && (
          <CorporateDocs
            data={corporateDocs}
            locale={locale}
            dictionary={dictionary}
          />
        )}
      </div>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <span
          className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] font-thin mb-5`}
        >
          {dictionary.investors.boardOfDirectors}
        </span>

        <TopsAccordion dictionary={dictionary} />
      </div>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <span
          className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] font-thin mb-5`}
        >
          {dictionary.investors.corporate_event_calendar}
        </span>

        <FinancialCalendar />
      </div>
    </div>
  )
}
