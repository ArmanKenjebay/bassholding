import { usePathname } from 'next/navigation'

export const redirectedPathName = (locale: string) => {
  const pathName = usePathname()

  if (!pathName) return '/'
  const segments = pathName.split('/')
  segments[1] = locale
  return segments.join('/')
}
