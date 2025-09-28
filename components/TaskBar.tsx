'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface TaskBarProps {
  openWindows: string[]
  onWindowClick: (window: string) => void
}

export default function TaskBar({ openWindows, onWindowClick }: TaskBarProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every second
  useState(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  })

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const windowIcons = {
    'Portfolio': '📁',
    'Shop': '🛒',
    'About': 'ℹ️',
    'Contact': '📧',
    'Settings': '⚙️'
  }

  return (
    <div className="mac-taskbar">
      <div className="flex items-center gap-2">
        <div className="mac-button text-xs px-2 py-1">
          START
        </div>
        
        {openWindows.map((window) => (
          <motion.div
            key={window}
            className="flex items-center gap-1 bg-gray-300 border border-gray-500 px-2 py-1 cursor-pointer hover:bg-gray-400"
            onClick={() => onWindowClick(window)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xs">{windowIcons[window as keyof typeof windowIcons] || '📄'}</span>
            <span className="text-xs">{window}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="ml-auto flex items-center gap-2 text-xs">
        <div className="flex items-center gap-1">
          <span>🔊</span>
          <div className="w-16 h-2 bg-gray-300 border border-gray-500">
            <div className="w-3/4 h-full bg-gray-600"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <span>🔋</span>
          <span>100%</span>
        </div>
        
        <div className="px-2 py-1 bg-gray-300 border border-gray-500">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  )
}
