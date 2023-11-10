'use client'
import Image from 'next/image'
import bassholdingLogo from '@/app/asset/bassholding-navbar-logo.svg'
import React, { ChangeEvent, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Select,
  SelectItem,
} from '@nextui-org/react'
import Link from 'next-intl/link'
import LocaleSwitcher from '@/app/[locale]/_components/LocaleSwitcher'
import { useRouter } from 'next-intl/client'

export default function CustomNavbar({
  params: { dictionary, locale },
}: {
  params: { locale: string; dictionary: { [key: string]: any } }
}) {
  const [lang, setLang] = useState(locale)

  const router = useRouter()

  console.log('lang', lang)

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" lang={locale}>
          <Image
            src={bassholdingLogo}
            alt={''}
            width={274}
            height={53}
            className="pointer-events-none"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Select
          aria-label="Choose language"
          size="sm"
          onChange={handleSelectionChange}
        >
          <SelectItem key="en" lang="en" value="en">
            EN
          </SelectItem>
          <SelectItem key="ru" lang="ru" value="ru">
            RU
          </SelectItem>
        </Select>

        <NavbarItem>
          <Link href="/about" lang={locale}>
            {dictionary.about}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
