import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`flex flex-col h-full w-full`}>
      admin layout
      {children}
    </div>
  )
}
