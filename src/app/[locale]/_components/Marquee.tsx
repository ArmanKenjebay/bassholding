import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function Marquee({ children }: Props) {
  return (
    //@ts-ignore
    <marquee className="app-marquee py-5">{children}</marquee>
  )
}
