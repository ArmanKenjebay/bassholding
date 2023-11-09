'use client'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'
import LocaleSwitcher from '@/app/[locale]/_components/LocaleSwitcher'
import LinkWithRef from 'next-intl/link'

type NavbarName = 'main' | 'about' | 'career' | 'direction' | 'news' | 'contact'

type Menus = [NavbarName, string]

export default async function CustomNavbar({
  params: { dictionary, locale },
}: {
  params: { locale: string; dictionary: { [key: string]: any } }
}) {
  const lang = locale

  const menus: Menus[] = [
    ['main', `/`],
    ['about', `about`],
  ]

  return (
    <Navbar>
      <NavbarBrand></NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menus.map(([name, link], index) => (
          <NavbarItem key={index}>
            <Link href={link}>{dictionary[name]}</Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
