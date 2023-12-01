import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function Marquee({ children }: Props) {
  return (
    <div className="relative flex overflow-x-hidden app-marquee text-black h-12 items-center">
      <div className="animate-marquee whitespace-nowrap">{children}</div>

      <div className="animate-marquee whitespace-nowrap">{children}</div>
    </div>
  )
}
