'use client'

import { ReactNode } from 'react'
import { Skeleton } from '@nextui-org/skeleton'


type Props = {
  children?: ReactNode
  classNames?: string
  classNamesSkeleton?: string
}

export default function Span({ classNames = '', classNamesSkeleton = '', children }: Props) {
  return <span className={`${classNames} inline-block w-full`}>{children ? children :
    <Skeleton className={`${classNamesSkeleton} h-5 rounded-xl w-full`}></Skeleton>}</span>
}