import { ReactNode } from 'react'
import AdminNavbar from '@/app/[locale]/(admin)/_components/AdminNavbar'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`flex flex-col h-full w-full px-10 py-5`}>
      <AdminNavbar />
      <div className={`flex flex-col flex-1 h-full`}>{children}</div>
    </div>
  )
}
