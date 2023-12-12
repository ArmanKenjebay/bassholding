'use client'

import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import useBreakpoint from '@/app/[locale]/_hooks/useBreakpoint'

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
  className?: string
  viewport?: Partial<ViewPortType>
  animation?: Partial<AnimationType>
  transition?: Partial<TransitionType>
}

export default function Reveal({
  children,
  className,
  animation = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  transition = {
    duration: 1,
    delay: 0.5,
  },
  viewport = { amount: 1, once: true },
}: Props) {
  const ref = useRef(null)

  const windowSize = useBreakpoint()

  const defaultAnimation = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }
  const defaultTransition = { duration: 1, delay: 0.5 }
  const defaultViewport = { amount: 0, once: true }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      className={className}
      variants={
        animation ? { ...defaultAnimation, ...animation } : defaultAnimation
      }
      viewport={
        viewport ? { ...defaultViewport, ...viewport } : defaultViewport
      }
      transition={
        transition ? { ...defaultTransition, ...transition } : defaultTransition
      }
    >
      {children}
    </motion.div>
  )
}
