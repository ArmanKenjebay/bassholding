'use client'

import Link from 'next-intl/link'
import { ADMIN_PASS } from '@/app/[locale]/_variables/admin.pass'
import { usePathname } from 'next-intl/client'

export default function AdminNavbar() {
  const pathName = usePathname()

  return (
    <nav
      className={`mb-5 bg-gray-800 text-xl flex items-center justify-between px-3`}
    >
      <Link
        className={`${
          pathName === `/${ADMIN_PASS}` ? 'text-primary-gold' : ''
        } duration-200 hover:text-primary-gold`}
        href={`/${ADMIN_PASS}`}
      >
        Общие переводы
      </Link>
      <Link
        className={`${
          pathName === `/${ADMIN_PASS}/news` ? 'text-primary-gold' : ''
        } duration-200 hover:text-primary-gold`}
        href={`/${ADMIN_PASS}/news`}
      >
        Новости
      </Link>
      <Link
        className={`${
          pathName === `/${ADMIN_PASS}/events` ? 'text-primary-gold' : ''
        } duration-200 hover:text-primary-gold`}
        href={`/${ADMIN_PASS}/events`}
      >
        События
      </Link>
      <Link
        className={`${
          pathName === `/${ADMIN_PASS}/vacancy` ? 'text-primary-gold' : ''
        } duration-200 hover:text-primary-gold`}
        href={`/${ADMIN_PASS}/vacancy`}
      >
        Вакансии
      </Link>
    </nav>
  )
}
