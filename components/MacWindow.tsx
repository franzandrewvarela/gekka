'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface MacWindowProps {
  title: string
  children: React.ReactNode
  initialPosition?: { x: number; y: number }
  initialSize?: { width: number; height: number }
  className?: string
  onClose?: () => void
  onClick?: () => void
  isActive?: boolean
}

export default function MacWindow({ 
  title, 
  children, 
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 400, height: 300 },
  className = '',
  onClose,
  onClick,
  isActive = false
}: MacWindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState(initialSize)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag if clicking on the title bar
    const target = e.target as HTMLElement
    if (target.closest('.mac-title-bar')) {
      setIsDragging(true)
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
      e.preventDefault()
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      
      // Keep window within viewport bounds
      const maxX = window.innerWidth - size.width
      const maxY = window.innerHeight - size.height
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Add global mouse event listeners for dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset, size])

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  const handleWindowClick = () => {
    if (onClick) {
      onClick()
    }
  }

  if (isMinimized) {
    return (
      <motion.div
        className="fixed bottom-6 left-4 bg-gray-300 border border-gray-500 px-2 py-1 text-xs cursor-pointer"
        onClick={() => setIsMinimized(false)}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`mac-window fixed ${isActive ? 'z-20' : 'z-10'} ${className}`}
      style={{
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 20 : position.y,
        width: isMaximized ? '100vw' : size.width,
        height: isMaximized ? 'calc(100vh - 44px)' : size.height,
      }}
      onMouseDown={handleMouseDown}
      onClick={handleWindowClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      <div className="mac-title-bar cursor-move select-none">
        <div className="flex items-center gap-1">
          <div 
            className="mac-control-button mac-close hover:bg-red-500" 
            onClick={(e) => {
              e.stopPropagation()
              handleClose()
            }}
          >
            ×
          </div>
          <div 
            className="mac-control-button mac-minimize hover:bg-yellow-500" 
            onClick={(e) => {
              e.stopPropagation()
              handleMinimize()
            }}
          >
            −
          </div>
          <div 
            className="mac-control-button mac-maximize hover:bg-green-500" 
            onClick={(e) => {
              e.stopPropagation()
              handleMaximize()
            }}
          >
            □
          </div>
        </div>
        <div className="flex-1 text-center font-bold text-white">
          {title}
        </div>
        <div className="w-16"></div>
      </div>
      
      <div className="mac-window-content">
        {children}
      </div>
    </motion.div>
  )
}
