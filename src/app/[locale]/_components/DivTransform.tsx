'use client'

import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type ViewPortType = {
  amount: number
  once: boolean
}

type XOpacity = {
  x: number
  opacity: number
}

type AnimationType = {
  hidden: XOpacity
  visible: XOpacity
}

type TransitionType = {
  duration: number
  delay: number
}

type Props = {
  children: ReactNode
  className?: string

  viewport?: Partial<ViewPortType>
  animation?: Partial<AnimationType>
  transition?: Partial<TransitionType>
}

export default function DivTransform({
  className = '',
  transition = {
    duration: 1,
    delay: 0.5,
  },
  animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
  viewport = {
    amount: 0.7,
    once: false,
  },
  children,
}: Props) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={animation}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
