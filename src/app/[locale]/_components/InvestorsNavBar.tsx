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
  }
}

export default function InvestrorsNavBar({ locale, dictionary }: Props) {
  const pathName = usePathname()

  return (
    <nav
      className={`xl:px-[60px] xl:py-[35px] flex justify-between bg-[#262626] items-center`}
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
          pathName === '/investors/press'
            ? 'text-primary-gold'
            : 'hover:text-primary-gold duration-200'
        }`}
        href={`/investors/press`}
        locale={locale}
      >
        {dictionary.press_center}
      </Link>
    </nav>
  )
}
