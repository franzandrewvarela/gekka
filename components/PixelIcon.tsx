'use client'

interface PixelIconProps {
  size?: number
  className?: string
  color?: string
}

export const PixelCamera = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <rect x="4" y="8" width="24" height="16" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="6" y="10" width="20" height="12" fill="#000000"/>
    <circle cx="16" cy="16" r="6" fill={color}/>
    <circle cx="16" cy="16" r="4" fill="#000000"/>
    <rect x="12" y="4" width="8" height="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="14" y="2" width="4" height="2" fill={color} stroke="#000000" strokeWidth="1"/>
  </svg>
)

export const PixelHeart = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <path d="M16 28c-1-1-2-2-3-3-3-3-5-6-5-9 0-3 2-5 5-5 2 0 3 1 4 2 1-1 2-2 4-2 3 0 5 2 5 5 0 3-2 6-5 9-1 1-2 2-3 3-1 1-2 2-3 3z" 
          fill={color} stroke="#000000" strokeWidth="1"/>
  </svg>
)

export const PixelMoon = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <path d="M8 16c0-4 3-7 7-7 1 0 2 0 3 1-2 2-3 5-3 8 0 3 1 6 3 8-1 1-2 1-3 1-4 0-7-3-7-7z" 
          fill={color} stroke="#000000" strokeWidth="1"/>
  </svg>
)

export const PixelGlobe = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <circle cx="16" cy="16" r="12" fill={color} stroke="#000000" strokeWidth="1"/>
    <path d="M4 16h24M16 4c-3 0-6 2-8 5 2 3 5 5 8 5s6-2 8-5c-2-3-5-5-8-5z" stroke="#000000" strokeWidth="1"/>
    <path d="M16 12c3 0 6 2 8 5-2 3-5 5-8 5s-6-2-8-5c2-3 5-5 8-5z" stroke="#000000" strokeWidth="1"/>
  </svg>
)

export const PixelShoppingCart = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <rect x="4" y="8" width="20" height="16" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="6" y="10" width="16" height="12" fill="#000000"/>
    <rect x="8" y="4" width="4" height="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="20" y="4" width="4" height="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="12" y="2" width="8" height="2" fill={color} stroke="#000000" strokeWidth="1"/>
    <circle cx="10" cy="26" r="2" fill={color} stroke="#000000" strokeWidth="1"/>
    <circle cx="22" cy="26" r="2" fill={color} stroke="#000000" strokeWidth="1"/>
  </svg>
)

export const PixelSettings = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <circle cx="16" cy="16" r="6" fill={color} stroke="#000000" strokeWidth="1"/>
    <circle cx="16" cy="16" r="3" fill="#000000"/>
    <rect x="14" y="2" width="4" height="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="14" y="26" width="4" height="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="2" y="14" width="4" height="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="26" y="14" width="4" height="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="6" y="6" width="2" height="2" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="24" y="6" width="2" height="2" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="6" y="24" width="2" height="2" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="24" y="24" width="2" height="2" fill={color} stroke="#000000" strokeWidth="1"/>
  </svg>
)

export const PixelMail = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <rect x="4" y="8" width="24" height="16" fill={color} stroke="#000000" strokeWidth="1"/>
    <path d="M4 8l12 8 12-8" stroke="#000000" strokeWidth="1" fill="none"/>
    <rect x="6" y="10" width="20" height="12" fill="#000000"/>
  </svg>
)

export const PixelInfo = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <circle cx="16" cy="16" r="12" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="14" y="8" width="4" height="8" fill="#000000"/>
    <rect x="14" y="20" width="4" height="4" fill="#000000"/>
  </svg>
)

export const PixelMapPin = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <path d="M16 4c-4 0-8 3-8 8 0 4 8 12 8 12s8-8 8-12c0-5-4-8-8-8z" fill={color} stroke="#000000" strokeWidth="1"/>
    <circle cx="16" cy="12" r="3" fill="#000000"/>
  </svg>
)

export const PixelPill = ({ size = 32, className = '', color = '#ffffff' }: PixelIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <rect x="8" y="12" width="16" height="8" rx="4" fill={color} stroke="#000000" strokeWidth="1"/>
    <rect x="10" y="14" width="12" height="4" fill="#000000"/>
    <rect x="12" y="16" width="8" height="2" fill={color}/>
  </svg>
)
