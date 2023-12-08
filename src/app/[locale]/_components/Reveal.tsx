'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type ViewPortType = {
  amount?: number
  once?: boolean
}

type XOpacity = {
  x?: number
  y?: number
  opacity?: number
}

type AnimationType = {
  hidden?: XOpacity
  visible?: XOpacity
}

type TransitionType = {
  duration?: number
  delay?: number
}

type Props = {
  children: ReactNode
  viewport?: Partial<ViewPortType>
  animation?: Partial<AnimationType>
  transition?: Partial<TransitionType>
}

export default function Reveal({
  children,
  animation = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  transition = {
    duration: 1,
    delay: 0.5,
  },
  viewport = { amount: 1, once: false },
}: Props) {
  return (
    <motion.div
      variants={animation}
      transition={transition}
      viewport={viewport}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}
