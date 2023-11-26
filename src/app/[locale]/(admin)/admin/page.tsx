'use client'

import { UserButton, useUser } from '@clerk/nextjs'

export default function Admin() {
  const { user, isLoaded } = useUser()

  return (
    <div className={`flex flex-col h-full`}>
      <nav className={`bg-primary-gold flex justify-between p-1`}>
        {isLoaded && user && (
          <div className={`flex justify-end`}>
            <UserButton afterSignOutUrl={`/`} />
          </div>
        )}
      </nav>
    </div>
  )
}
