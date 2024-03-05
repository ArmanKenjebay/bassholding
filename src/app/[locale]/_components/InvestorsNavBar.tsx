'use client'

import Link from 'next-intl/link'
import { Locale } from '@/i18n-config'
import { usePathname } from 'next-intl/client'

type Props = {
  locale: Locale
  dictionary: {
    title: string
    description: string
    company_profile: string
    financial_count: string
    press_center: string
    corporate_calendar: string
  }
}

export default function InvestrorsNavBar({ locale, dictionary }: Props) {
  const pathName = usePathname()

  return (
    <div
      className={`bg-[#262626] justify-around items-center py-4 gap-y-2 flex md:flex-row flex-col xl:text-lg lg:text-md md:text-xs text-base`}
    >
      <Link
        className={`${
          pathName === '/investors'
            ? 'text-primary-gold'
            : 'hover:text-primary-gold duration-200'
        }`}
        href={`/investors`}
        locale={locale}
      >
        {dictionary.company_profile}
      </Link>
      <Link
        className={`${
          pathName === '/investors/financial'
            ? 'text-primary-gold'
            : 'hover:text-primary-gold duration-200'
        }`}
        href={`/investors/financial`}
        locale={locale}
      >
        {dictionary.financial_count}
      </Link>
      <Link
        className={`${
          pathName === '/investors/calendar'
            ? 'text-primary-gold'
            : 'hover:text-primary-gold duration-200'
        }`}
        href={`/investors/calendar`}
        locale={locale}
      >
        {dictionary.corporate_calendar}
      </Link>
      <Link
        className={`${
          pathName === '/investors/press'
            ? 'text-primary-gold'
            : 'hover:text-primary-gold duration-200'
        }`}
        href={`/investors/press`}
        locale={locale}
      >
        {dictionary.press_center}
      </Link>
    </div>
  )
}
