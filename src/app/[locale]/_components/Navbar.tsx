'use client'

import { Navbar, Select, SelectItem } from '@nextui-org/react'
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

  const handleMenu = (isOpen: boolean) => {}

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathName, { locale: e.target.value })
  }

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
      className={`ease-in-out duration-200 ${
        isMenuOpen ? 'bg-black' : 'bg-transparent'
      }`}
      classNames={{
        base: 'absolute top-0',
        wrapper: 'px-5',
      }}
    >
      <div className="flex gap-x-10 w-full items-center justify-between">
        <div className="flex">
          <Link
            href="/"
            lang={locale}
            className="w-[104px] h-[20px] lg:w-[273px] lg:h-[53px]"
          >
            <Image
              src={bassholdingLogo}
              alt={''}
              width={274}
              height={53}
              className="pointer-events-none"
              priority
            />
          </Link>
        </div>
        <div className="sm:flex hidden flex-1 justify-start">
          <div className="flex sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
            <NavigationLink
              className="xl:text-2xl lg:text-lg md:text-sm text-xs font-normal"
              href="/about"
              lang={locale}
            >
              {dictionary.about}
            </NavigationLink>
            <NavigationLink
              className="xl:text-2xl lg:text-lg md:text-sm text-xs font-normal"
              href="/direction"
              lang={locale}
            >
              {dictionary.direction}
            </NavigationLink>
            <NavigationLink
              className="xl:text-2xl lg:text-lg md:text-sm text-xs font-normal"
              href="/news"
              lang={locale}
            >
              {dictionary.news}
            </NavigationLink>
            <NavigationLink
              className="xl:text-2xl lg:text-lg md:text-sm text-xs font-normal"
              href="/career"
              lang={locale}
            >
              {dictionary.career}
            </NavigationLink>
          </div>
        </div>
        <div className="flex">
          <Select
            aria-label="Choose language"
            size="sm"
            className="min-w-[72px] bg-transparent text-white"
            variant="bordered"
            onChange={handleSelectionChange}
            selectedKeys={[locale]}
            classNames={{}}
          >
            <SelectItem key="en" lang="en" value="en">
              EN
            </SelectItem>
            <SelectItem key="ru" lang="ru" value="ru">
              RU
            </SelectItem>
          </Select>
        </div>
      </div>

      <NavbarMenuToggle
        onChange={handleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarMenu className="pt-5 bg-black z-50">
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
