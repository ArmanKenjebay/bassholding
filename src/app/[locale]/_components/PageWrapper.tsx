'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function PageWrapper({ children }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className={`w-full h-full`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 2.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
