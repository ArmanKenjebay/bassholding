'use client'

import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import useBreakpoint from '@/app/[locale]/_hooks/useBreakpoint'

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
  isInfinity: boolean
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
    amount: 0,
    once: true,
  },
  children,
}: Props) {
  const ref = useRef(null)

  const windowSize = useBreakpoint()

  const defaultAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  const defaultTransition: Partial<TransitionType> = {
    duration: 1,
    delay: 0.5,
    isInfinity: false,
  }
  const defaultViewport: Partial<ViewPortType> = { amount: 1, once: true }

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
