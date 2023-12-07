'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {
  children: ReactNode
  classNames?: string
  offset?: string[]
}

export default function MotionDiv({
  classNames = '',
  offset,
  children,
}: Props) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset ? (offset as any) : ['end end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1.5, 0])

  return (
    <motion.div ref={ref} style={{ opacity }} className={`${classNames}`}>
      {children}
    </motion.div>
  )
}
