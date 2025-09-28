'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface MacWindowProps {
  title: string
  children: React.ReactNode
  initialPosition?: { x: number; y: number }
  initialSize?: { width: number; height: number }
  className?: string
}

export default function MacWindow({ 
  title, 
  children, 
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 400, height: 300 },
  className = ''
}: MacWindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState(initialSize)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsDragging(true)
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  const handleClose = () => {
    // In a real app, this would close the window
    console.log('Window closed')
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
      className={`mac-window fixed ${className}`}
      style={{
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 20 : position.y,
        width: isMaximized ? '100vw' : size.width,
        height: isMaximized ? 'calc(100vh - 44px)' : size.height,
        zIndex: 10
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mac-title-bar">
        <div className="flex items-center gap-1">
          <div className="mac-control-button mac-close" onClick={handleClose}>
            ×
          </div>
          <div className="mac-control-button mac-minimize" onClick={handleMinimize}>
            −
          </div>
          <div className="mac-control-button mac-maximize" onClick={handleMaximize}>
            □
          </div>
        </div>
        <div className="flex-1 text-center font-bold">
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
