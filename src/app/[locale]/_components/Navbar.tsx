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

export default function CustomNavbar({
  params: { dictionary, locale },
}: {
  params: { locale: string; dictionary: { [key: string]: any } }
}) {
  const router = useRouter()
  const pathName = usePathname()

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathName, { locale: e.target.value })
  }

  return (
    <Navbar className="py-2" position="sticky">
      <NavbarBrand>
        <Link href="/" lang={locale}>
          <Image
            src={bassholdingLogo}
            alt={''}
            width={274}
            height={53}
            className="pointer-events-none"
            priority
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavigationLink href="/about" lang={locale}>
            {dictionary.about}
          </NavigationLink>

          {/*<Link href="/about" lang={locale}>*/}
          {/*  {dictionary.about}*/}
          {/*</Link>*/}
        </NavbarItem>

        <NavbarItem>
          <Select
            aria-label="Choose language"
            size="sm"
            className="w-[80px]"
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
      </NavbarContent>
    </Navbar>
  )
}
