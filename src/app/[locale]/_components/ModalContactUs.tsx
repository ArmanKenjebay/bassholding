'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import { Input } from '@nextui-org/input'
import { useMemo, useState } from 'react'

type Props = {
  dictionary: any
  isOpen: boolean
  onOpen: () => void
  onOpenChange: () => void
}
export default function ModalContactUs({
  dictionary,
  isOpen,
  onOpenChange,
}: Props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalidEmail = useMemo(() => {
    if (email.trim() === '' || !email.trim()) return false

    return !validateEmail(email)
  }, [email])

  const isInvalidName = useMemo(() => {
    return !name && !name.trim()
  }, [name])

  const submit = () => {
    fetch('https://bassholding.bitrix24.kz/rest/1/rjh3u8m34d0xxhlc/', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Заявка на сайте bassholding.kz',
        DESCRIPTION: `${name}`,
      }),
    })

    console.log(`email: ${email}, name: ${name}`)
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              dictionary
            </ModalHeader>
            <ModalBody>
              <div className={`flex flex-col gap-y-2`}>
                <Input
                  isRequired
                  variant={'bordered'}
                  type="text"
                  label="Name"
                  defaultValue={`${name}`}
                  isInvalid={isInvalidName}
                  errorMessage={name && 'Please enter a valid name'}
                  onValueChange={setName}
                  className="w-full h-20"
                />
                <Input
                  isRequired
                  variant={'bordered'}
                  type="email"
                  label="Email"
                  value={email}
                  onValueChange={setEmail}
                  isInvalid={isInvalidEmail}
                  errorMessage={isInvalidEmail && 'Please enter a valid email'}
                  className={`w-full h-20`}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onPress={submit}
                className={`ease-in-out duration-200 bg-transparent border hover:bg-primary-gold hover:border-black`}
              >
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
