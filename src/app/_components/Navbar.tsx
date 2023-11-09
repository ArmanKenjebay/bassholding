'use client'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CustomNavbar() {
  const redirectPathName = ({ locale }: { locale: string }) => {
    const pathName = usePathname()

    if (!pathName.trim()) return '/'

    const segments = pathName.split('/')
    segments[1] = locale

    return segments.join('/')
  }

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
