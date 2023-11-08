import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Providers } from '@/app/providers'
import CustomNavbar from '@/app/_components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { [key: string]: any }) {
  return {
    title: 'Home',
    description: 'Generated by create next app',
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <CustomNavbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
