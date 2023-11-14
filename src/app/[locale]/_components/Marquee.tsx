import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function Marquee({ children }: Props) {
  return (
    <div className="relative flex overflow-x-hidden app-marquee text-black">
      <div className="py-6 animate-marquee whitespace-nowrap">{children}</div>

      <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap">
        {children}
      </div>
    </div>
  )
}
