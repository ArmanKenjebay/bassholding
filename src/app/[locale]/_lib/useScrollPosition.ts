import { useEffect, useState } from 'react'

const useScrollPosition = (threshold = 100) => {
  const [position, setPosition] = useState({
    x: window.scrollX,
    y: window.scrollY,
  })

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setPosition({ x: window.scrollX, y: window.scrollY })
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return position
}

export default useScrollPosition
