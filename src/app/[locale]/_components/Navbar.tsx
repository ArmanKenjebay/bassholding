'use client'

import {
  Button,
  Navbar,
  Select,
  SelectItem,
  useDisclosure,
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
import ModalContactUs from '@/app/[locale]/_components/ModalContactUs'

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathName, { locale: e.target.value })
  }

  return (
    <>
      <Navbar
        isBlurred={false}
        maxWidth="full"
        onMenuOpenChange={setIsMenuOpen}
        className={`ease-in-out duration-200 ${
          isMenuOpen ? 'bg-black' : 'bg-transparent'
        }`}
        classNames={{
          base: 'absolute top-0 z-50',
          wrapper: 'px-2 lg:px-5 xl:px-2',
        }}
      >
        <div className="flex gap-x-10 w-full items-center justify-between">
          <div className="flex">
            <Link
              href="/"
              lang={locale}
              className="w-[104px] h-[20px] md:w-[120px] md:h-full xl:w-[273px] xl:h-[53px]"
            >
              <Image
                src={bassholdingLogo}
                alt={''}
                width={274}
                height={53}
                className="pointer-events-none w-full h-full"
                priority
              />
            </Link>
          </div>
          <div className="sm:flex hidden flex-1 justify-start">
            <div className="flex sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
              <NavigationLink
                className="xl:text-2xl lg:text-base md:text-sm text-xs font-normal whitespace-nowrap"
                href="/about"
                lang={locale}
              >
                {dictionary.about}
              </NavigationLink>
              <NavigationLink
                className="xl:text-2xl lg:text-base md:text-sm text-xs font-normal"
                href="/direction"
                lang={locale}
              >
                {dictionary.direction}
              </NavigationLink>
              <NavigationLink
                className="xl:text-2xl lg:text-base md:text-sm text-xs font-normal"
                href="/news"
                lang={locale}
              >
                {dictionary.news}
              </NavigationLink>
              <NavigationLink
                className="xl:text-2xl lg:text-base md:text-sm text-xs font-normal"
                href="/career"
                lang={locale}
              >
                {dictionary.career}
              </NavigationLink>
            </div>
          </div>
          <div className="flex gap-x-2 justify-between">
            <Select
              aria-label="Choose language"
              onChange={handleSelectionChange}
              selectedKeys={[locale]}
              className="min-w-[72px]"
              classNames={{
                mainWrapper: 'h-10',
                trigger: 'bg-transparent data-[hover=true]:bg-transparent',
                innerWrapper: '',
              }}
            >
              <SelectItem key="en" lang="en" value="en">
                EN
              </SelectItem>
              <SelectItem key="ru" lang="ru" value="ru">
                RU
              </SelectItem>
            </Select>

            <div className="hidden md:flex md:items-center">
              <Button
                size={'sm'}
                onClick={onOpen}
                className={`truncate lg:text-base md:text-xs font-normal px-1 rounded-xl border-2 bg-transparent ease-in-out duration-200 hover:bg-primary-gold hover:border-white hover:text-white`}
              >
                {dictionary.contact}
              </Button>
            </div>
          </div>
        </div>

        <NavbarMenuToggle
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
      <ModalContactUs
        dictionary={dictionary}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  )
}
