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
import { ChangeEvent, useState } from 'react'
import { usePathname, useRouter } from 'next-intl/client'
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

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = (isOpen: boolean) => {
    console.log('isOpen', isOpen)
  }

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathName, { locale: e.target.value })
  }

  return (
    <Navbar
      maxWidth="2xl"
      shouldHideOnScroll
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'pt-3',
        wrapper: 'px-5',
      }}
    >
      <Link href="/" lang={locale}>
        <Image
          src={bassholdingLogo}
          alt={''}
          width={274}
          height={53}
          className="pointer-events-none w-[274px]"
          priority
        />
      </Link>

      <NavigationLink href="/about" lang={locale}>
        {dictionary.about}
      </NavigationLink>

      <NavigationLink href="/direction" lang={locale}>
        {dictionary.direction}
      </NavigationLink>
      <NavigationLink href="/news" lang={locale}>
        {dictionary.news}
      </NavigationLink>
      <NavigationLink href="/career" lang={locale}>
        {dictionary.career}
      </NavigationLink>

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

      <NavbarMenuToggle
        onChange={handleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarMenu className="pt-5">
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
    </Navbar>
  )
}
