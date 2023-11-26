import { ReactNode } from 'react'
import { Locale } from '@/i18n-config'
import { ClerkProvider } from '@clerk/nextjs'

export function generateMetadata() {
  return {
    title: 'Auth | Bassholding',
  }
}

type Props = {
  children: ReactNode
  params: { locale: Locale }
}
export default async function Layout({ params: { locale }, children }: Props) {
  return (
    <ClerkProvider>
      <main className={`h-full w-full px-3 py-2`}>{children}</main>
    </ClerkProvider>
  )
}
