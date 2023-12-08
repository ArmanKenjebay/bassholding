'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Reveal({ children }: Props) {
  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 1,
    delay: 0.5,
  }

  return (
    <motion.div
      variants={variants}
      transition={transition}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}
