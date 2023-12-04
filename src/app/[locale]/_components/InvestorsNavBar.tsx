'use client'

import Link from 'next-intl/link'
import { Locale } from '@/i18n-config'
import { usePathname } from 'next-intl/client'

type Props = {
  locale: Locale
}

export default function InvestrorsNavBar({ locale }: Props) {
  const pathName = usePathname()

  return (
    <nav
      className={`xl:px-[60px] xl:py-[35px] flex justify-between bg-[#262626] items-center`}
    >
      <Link
        className={`${pathName === '/investors' ? 'text-primary-gold' : ''}`}
        href={`/investors`}
        locale={locale}
      >
        Профиль компании
      </Link>
      <Link
        className={`${
          pathName === '/investors/financial' ? 'text-primary-gold' : ''
        }`}
        href={`/investors/financial`}
        locale={locale}
      >
        Финансовые показатели
      </Link>
      <Link
        className={`${
          pathName === '/investors/press' ? 'text-primary-gold' : ''
        }`}
        href={`/investors/press`}
        locale={locale}
      >
        Пресс-центр
      </Link>
    </nav>
  )
}
