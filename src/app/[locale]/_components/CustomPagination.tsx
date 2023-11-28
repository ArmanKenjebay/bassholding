'use client'
import {
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
  cn,
} from '@nextui-org/react'
import { SVGProps } from 'react'

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
  handlePage: (page: number) => void
  total?: number
  initialPage?: number
}
export default function CustomPagination({
  handlePage,
  total,
  initialPage,
}: PaginationProps) {
  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={total || 5}
      initialPage={initialPage || 1}
      className="gap-2"
      radius="full"
      onChange={handlePage}
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
            className={cn(
              className,
              isActive &&
                'text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold',
            )}
            onClick={() => setPage(value)}
          >
            {value}
          </button>
        )
      }}
      variant="light"
    />
  )
}
