import React from 'react'
import NextImage from 'next/image'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import MotionDiv from '@/app/[locale]/_components/MotionDiv'
import YearReport from '@/app/[locale]/_components/YearReport'
import wallImage from '@/../public/images/company_profile.webp'
import DivTransform from '@/app/[locale]/_components/DivTransform'
import PressRelease from '@/app/[locale]/_components/PressRelease'
import FinancialTabs from '@/app/[locale]/_components/FinancialTabs'
import CalculateModal from '@/app/[locale]/(main)/investors/_components/CalculateModal'
import { AnnualsDocs, FinDocs } from '@/app/[locale]/_types/TFinDocs'

type Props = {
  params: { locale: Locale }
}

export default async function Investors({ params: { locale } }: Props) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    Authorization: `Bearer ${token}`,
  }

  const dictionary: any = await getDictionary(locale)

  let finDocs: FinDocs | undefined = undefined
  let annualsDocs: AnnualsDocs | undefined = undefined

  const finDocsResponse = await fetch(
    `${api}/finance-indicators?populate=*&sort=id:desc`,
    {
      headers,
      cache: 'no-cache',
    },
  )

  const annualsDocsResponse = await fetch(
    `${api}/annuals?populate=*&sort=id:desc`,
    {
      headers,
      cache: 'no-cache',
    },
  )

  if (finDocsResponse.ok) {
    finDocs = await finDocsResponse.json()
  }

  if (annualsDocsResponse.ok) {
    annualsDocs = await annualsDocsResponse.json()
  }

  const ebidta = [
    {
      label: 'EBIDTA',
      value: {
        ru: '457 млн ₸',
        kk: '457 млн ₸',
        en: '457 million ₸',
      },
    },
    { label: 'ROA', value: '31.4 %' },
    { label: 'ROE', value: '58.5%' },
    {
      label: 'developmentContributions',
      value: {
        ru: '> 2 млрд ₸',
        kk: '> 2 млрд ₸',
        en: '> 2 billion ₸',
      },
    },
  ]

  const animate = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: -50,
      opacity: 1,
    },
  }

  const getEbidta = (value: any) => {
    if (!Object.prototype.hasOwnProperty.call(value, 'ru')) {
      return value
    }

    switch (locale) {
      case 'ru':
        return value.ru
      case 'kk':
        return value.kk
      case 'en':
        return value.en
    }
  }

  return (
    <div className={`flex flex-col h-full xl:mb-10 mb-5`}>
      <MotionDiv>
        <div className={`w-full relative xl:mb-0 mb-5`}>
          <NextImage
            className={`w-full xl:h-[484px] lg:h-[280px] md:h-[180px] sm:h-[140px] h-[121px] object-cover`}
            width={1440}
            height={484}
            src={wallImage.src}
            alt="bassholding image"
          />
          <DivTransform
            className={`absolute top-1/3 right-10`}
            animation={animate}
          >
            <CalculateModal locale={locale} dictionary={dictionary} />
          </DivTransform>
        </div>
      </MotionDiv>

      <MotionDiv>
        <div className={`lg:flex flex-col p-[60px] hidden sm:mb-10 mb-5`}>
          <span className={`text-primary-gold text-[48px]`}>BASS GOLD</span>
          <span className={`text-[24px]`}>
            {dictionary.investors.bass_gold_text}
          </span>
        </div>
      </MotionDiv>

      <MotionDiv>
        <div
          className={`lg:flex lg:flex-row flex-col p-[60px] justify-evenly items-center hidden sm:mb-10 mb-5`}
        >
          {ebidta.map((el: any) => (
            <div className={`flex flex-col text-[32px]`}>
              <span className={``}>{dictionary.investors[el.label]}</span>
              <span className={`text-primary-gold`}>{getEbidta(el.value)}</span>
            </div>
          ))}
        </div>
      </MotionDiv>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        {finDocs?.data && (
          <FinancialTabs
            dictionary={dictionary.investors}
            locale={locale}
            data={finDocs}
          />
        )}
      </div>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        {annualsDocs?.data && (
          <YearReport
            dictionary={dictionary.investors}
            locale={locale}
            data={annualsDocs}
          />
        )}
      </div>

      <div
        className={`md:flex hidden xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px]  flex-col sm:mb-10 mb-5`}
      >
        <span
          className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] sm:mb-10 mb-5`}
        >
          {dictionary.investors.pressRelease}
        </span>

        <PressRelease locale={locale} />
      </div>
    </div>
  )
}
