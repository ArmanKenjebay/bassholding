'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Select,
  SelectItem,
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next-intl/link'
import { usePathname, useRouter } from 'next-intl/client'
import React, { ChangeEvent } from 'react'
import bassholdingLogo from '@/app/asset/bassholding-navbar-logo.svg'
import NavigationLink from '@/app/[locale]/_components/NavigationLink'
import {
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'

export default function CustomNavbar({
  params: { dictionary, locale },
}: {
  params: { locale: string; dictionary: { [key: string]: any } }
}) {
  const router = useRouter()
  const pathName = usePathname()

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathName, { locale: e.target.value })
  }

  return (
    <Navbar
      shouldHideOnScroll
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      className=""
      classNames={{
        base: 'pt-3',
        wrapper: 'justify-between px-5 w-full max-w-full',
      }}
    >
      <NavbarBrand>
        <Link href="/" lang={locale}>
          <Image
            src={bassholdingLogo}
            alt={''}
            width={274}
            height={53}
            className="pointer-events-none lg:w-[274px] md:w-[180px] sm:w-[145px] w-[104px]"
            priority
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem className="sm:block hidden">
          <NavigationLink href="/about" lang={locale}>
            {dictionary.about}
          </NavigationLink>
        </NavbarItem>
        <NavbarItem className="sm:block hidden">
          <NavigationLink href="/direction" lang={locale}>
            {dictionary.direction}
          </NavigationLink>
        </NavbarItem>
        <NavbarItem className="sm:block hidden">
          <NavigationLink href="/news" lang={locale}>
            {dictionary.news}
          </NavigationLink>
        </NavbarItem>
        <NavbarItem className="sm:block hidden">
          <NavigationLink href="/career" lang={locale}>
            {dictionary.career}
          </NavigationLink>
        </NavbarItem>

        <NavbarItem>
          <Select
            aria-label="Choose language"
            size="sm"
            className="min-w-[72px] bg-transparent text-white"
            variant="bordered"
            onChange={handleSelectionChange}
            selectedKeys={[locale]}
          >
            <SelectItem key="en" lang="en" value="en">
              EN
            </SelectItem>
            <SelectItem key="ru" lang="ru" value="ru">
              RU
            </SelectItem>
          </Select>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />

        <NavbarMenu>
          <NavbarMenuItem>
            <NavigationLink href="/about" lang={locale}>
              {dictionary.about}
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink href="/direction" lang={locale}>
              {dictionary.direction}
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink href="/news" lang={locale}>
              {dictionary.news}
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink href="/career" lang={locale}>
              {dictionary.career}
            </NavigationLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  )
}
