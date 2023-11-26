'use client'
import { Button, Card } from '@nextui-org/react'
import { CardBody } from '@nextui-org/card'
import Link from 'next-intl/link'

export default function Auth() {
  return (
    <div className={`flex flex-col h-full justify-center items-center`}>
      <Card>
        <CardBody>
          <div className={`flex gap-3`}>
            <Link href={'/'}>
              <Button color={'warning'}>back</Button>
            </Link>
            <Link href={'/sign-up'}>
              <Button color={'primary'}>sign-up</Button>
            </Link>
            <Link href={'/sign-in'}>
              <Button color={'secondary'}>sign-in</Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
