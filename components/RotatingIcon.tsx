'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface RotatingIconProps {
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  direction?: 'clockwise' | 'counterclockwise'
  className?: string
}

export default function RotatingIcon({ 
  children, 
  speed = 10, 
  pauseOnHover = true,
  direction = 'clockwise',
  className = ''
}: RotatingIconProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (isHovered && pauseOnHover) return

    const interval = setInterval(() => {
      setRotation(prev => {
        const increment = direction === 'clockwise' ? 1 : -1
        return prev + increment
      })
    }, 1000 / speed)

    return () => clearInterval(interval)
  }, [speed, direction, isHovered, pauseOnHover])

  return (
    <motion.div
      className={`rotating-icon ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
