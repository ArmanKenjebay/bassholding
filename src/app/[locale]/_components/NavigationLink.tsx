'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'
import Link from 'next-intl/link'

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className={`${
        isActive &&
        'text-primary-gold underline-offset-8 underline hover:opacity-90'
      } hover:text-primary-gold duration-200 ease-in-out`}
      {...rest}
    />
  )
}
