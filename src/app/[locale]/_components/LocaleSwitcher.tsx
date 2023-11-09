'use client'

import Link from 'next/link'
import { i18n } from '@/i18n-config'
import { redirectedPathName } from '@/lib/redirected-path-name'

export default function LocaleSwitcher() {
  return (
    <div>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
