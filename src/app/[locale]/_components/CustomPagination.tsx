'use client'

import {
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
  cn,
} from '@nextui-org/react'
import { SVGProps } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next-intl/client'
import { Locale } from '@/i18n-config'

type IconSvgProps = SVGProps<SVGSVGElement>
const ChevronIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M15.5 19l-7-7 7-7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
)

type PaginationProps = {
  page: number
  total: number
  hasNextPage: boolean
  hasPrevPage: boolean
}
export default function CustomPagination({
  page,
  total,
  hasNextPage,
  hasPrevPage,
}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const onChangePage = (page: number) => {
    router.push(`/news/?page=${page}&pageSize=${4}`)
  }

  return (
    <Pagination
      onChange={onChangePage}
      disableCursorAnimation
      showControls
      total={total}
      initialPage={page}
      className="gap-2"
      radius="full"
      renderItem={({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
      }: PaginationItemRenderProps) => {
        if (value === PaginationItemType.NEXT) {
          return (
            <button
              key={key}
              className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
              onClick={onNext}
              disabled={!hasPrevPage}
            >
              <ChevronIcon className="rotate-180" />
            </button>
          )
        }

        if (value === PaginationItemType.PREV) {
          return (
            <button
              key={key}
              className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8')}
              onClick={onPrevious}
              disabled={!hasNextPage}
            >
              <ChevronIcon />
            </button>
          )
        }

        if (value === PaginationItemType.DOTS) {
          return (
            <button key={key} className={className}>
              ...
            </button>
          )
        }

        return (
          <button
            ref={ref}
            key={key}
            className={cn(className, isActive && 'bg-white font-bold')}
            onClick={() => setPage(value)}
          >
            <span className={`${isActive && 'text-black'}`}>{value}</span>
          </button>
        )
      }}
      variant="light"
    />
  )
}
