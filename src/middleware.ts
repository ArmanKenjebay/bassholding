import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { i18n } from './i18n-config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { authMiddleware } from '@clerk/nextjs'

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )
  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

function localeMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url,
      ),
    )
  }
}

export default authMiddleware({
  beforeAuth: (req) => {
    return localeMiddleware(req)
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: [
    '/',
    '/:locale',
    '/:locale/about',
    '/:locale/bass-eco',
    '/:locale/bassgold',
    '/:locale/career',
    '/:locale/direction',
    '/:locale/fintech',
    '/:locale/news',
    '/:locale/news/:id',
    '/:locale/pincode',
    '/:locale/sign-in',
  ],
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}
