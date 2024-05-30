'use client'

import { Button, Navbar, Select, SelectItem } from '@nextui-org/react'
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
import CircleIndicator from '@/app/[locale]/_components/CircleIndicator'

export default function CustomNavbar({
  params: { dictionary, locale, modalDictionary },
}: {
  params: {
    locale: string
    dictionary: { [key: string]: any }
    modalDictionary: { [key: string]: any }
  }
}) {
  const router = useRouter()
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathName, { locale: e.target.value })
  }

  const handleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen)
  }

  const handleNavbarMenuItem = (isOpen: boolean) => {
    setTimeout(() => {
      setIsMenuOpen(!isOpen)
    }, 500)
  }

  return (
    <>
      <CircleIndicator />

      <Navbar
        isBlurred={false}
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={handleMenu}
        className={`mx-auto max-w-screen-2xl ease-in-out duration-200 top-0 z-50 absolute ${
          isMenuOpen ? 'bg-black' : 'bg-transparent'
        }`}
        classNames={{
          wrapper: 'justify-between items-center sm:px-2 px-3',
        }}
      >
        <div className="flex">
          <Link
            href="/"
            lang={locale}
            className="w-[104px] h-[20px] md:w-[120px] md:h-full xl:w-[170px] xl:h-[34px]"
          >
            <Image
              src={bassholdingLogo}
              alt={''}
              width={170}
              height={34}
              className="pointer-events-none w-full h-full"
              priority
            />
          </Link>
        </div>
        <div className="lg:flex hidden flex-1">
          <div className="flex justify-around w-full items-center">
            <NavigationLink
              className="xl:text-[22px] lg:text-base md:text-sm text-xs font-normal whitespace-nowrap"
              href="/about"
              lang={locale}
            >
              {dictionary.about}
            </NavigationLink>
            <NavigationLink
              className="xl:text-[22px] lg:text-base md:text-sm text-xs font-normal"
              href="/direction"
              lang={locale}
            >
              {dictionary.direction}
            </NavigationLink>
            {/*<NavigationLink*/}
            {/*  className="xl:text-[22px] lg:text-base md:text-sm text-xs font-normal"*/}
            {/*  href="/career"*/}
            {/*  lang={locale}*/}
            {/*>*/}
            {/*  {dictionary.career}*/}
            {/*</NavigationLink>*/}
            <NavigationLink
              className="xl:text-[22px] lg:text-base md:text-sm text-xs font-normal"
              href="/news"
              lang={locale}
            >
              {dictionary.news}
            </NavigationLink>
            <NavigationLink
              className="xl:text-[22px] lg:text-base md:text-sm text-xs font-normal"
              href="/investors"
              lang={locale}
            >
              {dictionary.investor}
            </NavigationLink>

            <div className="flex">
              <Select
                aria-label="Choose language"
                onChange={handleSelectionChange}
                selectedKeys={[locale]}
                className="min-w-[72px]"
                classNames={{
                  mainWrapper: 'h-10',
                  trigger:
                    'opacity-80 bg-[#5E5E5E] data-[hover=true]:bg-[#5E5E5E]',
                  innerWrapper: '',
                }}
              >
                <SelectItem key="en" lang="en" value="en">
                  EN
                </SelectItem>
                <SelectItem key="ru" lang="ru" value="ru">
                  RU
                </SelectItem>
                <SelectItem key="kk" lang="kk" value="kk">
                  KZ
                </SelectItem>
              </Select>
            </div>

            <div className="hidden lg:flex md:items-center">
              <Link href={'/contact'} locale={locale}>
                <Button
                  className={`p-4 truncate lg:text-base md:text-xs font-normal rounded-xl opacity-80 bg-[#5E5E5E] ease-in-out duration-200 hover:bg-primary-gold hover:border-white hover:text-white ${
                    pathName === '/contact' && 'bg-primary-gold border-black'
                  }`}
                >
                  {dictionary.contact}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <NavbarMenu className="pt-5 bg-black z-50">
          <NavbarMenuItem>
            <NavigationLink
              onClick={() => handleNavbarMenuItem(isMenuOpen)}
              href="/about"
              lang={locale}
            >
              {dictionary.about}
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink
              onClick={() => handleNavbarMenuItem(isMenuOpen)}
              href="/direction"
              lang={locale}
            >
              {dictionary.direction}
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink
              onClick={() => handleNavbarMenuItem(isMenuOpen)}
              href="/news"
              lang={locale}
            >
              {dictionary.news}
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink
              onClick={() => handleNavbarMenuItem(isMenuOpen)}
              href="/career"
              lang={locale}
            >
              {dictionary.career}
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink
              onClick={() => handleNavbarMenuItem(isMenuOpen)}
              href="/investors"
              lang={locale}
            >
              Инвесторы
            </NavigationLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavigationLink
              onClick={() => handleNavbarMenuItem(isMenuOpen)}
              href="/contact"
              lang={locale}
            >
              {dictionary.contact}
            </NavigationLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  )
}
