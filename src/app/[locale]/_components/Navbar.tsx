'use client'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import Link from 'next-intl/link'
import LocaleSwitcher from '@/app/[locale]/_components/LocaleSwitcher'

export default async function CustomNavbar({
  params: { dictionary, locale },
}: {
  params: { locale: string; dictionary: { [key: string]: any } }
}) {
  console.log(locale)

  return (
    <Navbar>
      <NavbarBrand></NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" lang={locale}>
            {dictionary.main}
          </Link>
        </NavbarItem>

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
