'use client'

import { motion } from 'framer-motion'

interface DesktopIconProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
  className?: string
}

export default function DesktopIcon({ icon, label, onClick, className = '' }: DesktopIconProps) {
  return (
    <motion.div
      className={`desktop-icon ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-12 h-12 mb-1 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div className="text-xs text-center leading-tight">
        {label}
      </div>
    </motion.div>
  )
}
