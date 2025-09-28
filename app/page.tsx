'use client'

import { useState } from 'react'
import MacWindow from '@/components/MacWindow'
import DesktopIcon from '@/components/DesktopIcon'
import MenuBar from '@/components/MenuBar'
import TaskBar from '@/components/TaskBar'
import RotatingIcon from '@/components/RotatingIcon'
import { 
  PixelCamera,
  PixelHeart,
  PixelMoon,
  PixelPill,
  PixelGlobe,
  PixelMapPin,
  PixelShoppingCart,
  PixelInfo,
  PixelMail,
  PixelSettings
} from '@/components/PixelIcon'

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>(['Portfolio'])
  const [activeWindow, setActiveWindow] = useState<string>('Portfolio')

  const handleIconClick = (windowName: string) => {
    if (!openWindows.includes(windowName)) {
      setOpenWindows([...openWindows, windowName])
    }
    setActiveWindow(windowName)
  }

  const handleWindowClick = (windowName: string) => {
    setActiveWindow(windowName)
  }

  const desktopIcons = [
    { icon: <PixelCamera size={32} color="#ffffff" />, label: 'Portfolio', window: 'Portfolio', rotation: 'rotate-slow' },
    { icon: <PixelShoppingCart size={32} color="#ffffff" />, label: 'Shop', window: 'Shop', rotation: 'rotate-medium' },
    { icon: <PixelHeart size={32} color="#ffffff" />, label: 'Favorites', window: 'Favorites', rotation: 'rotate-fast' },
    { icon: <PixelMoon size={32} color="#ffffff" />, label: 'Sleep', window: 'Sleep', rotation: 'rotate-reverse' },
    { icon: <PixelPill size={32} color="#ffffff" />, label: 'Medication', window: 'Medication', rotation: 'rotate-slow' },
    { icon: <PixelGlobe size={32} color="#ffffff" />, label: 'Internet', window: 'Internet', rotation: 'rotate-medium' },
    { icon: <PixelMapPin size={32} color="#ffffff" />, label: 'Go Out', window: 'GoOut', rotation: 'rotate-fast' },
    { icon: <PixelInfo size={32} color="#ffffff" />, label: 'About', window: 'About', rotation: 'rotate-slow' },
    { icon: <PixelMail size={32} color="#ffffff" />, label: 'Contact', window: 'Contact', rotation: 'rotate-reverse' },
    { icon: <PixelSettings size={32} color="#ffffff" />, label: 'Settings', window: 'Settings', rotation: 'rotate-medium' }
  ]

  return (
    <div className="h-screen overflow-hidden relative retro-background">
      
      {/* Menu Bar */}
      <MenuBar />
      
      {/* Floating Rotating Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 right-1/4 text-6xl text-white opacity-10">
          <div className="rotating-icon rotate-slow">♛</div>
        </div>
        <div className="absolute top-1/3 left-1/3 text-4xl text-white opacity-15">
          <div className="rotating-icon rotate-reverse">♜</div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-5xl text-white opacity-10">
          <div className="rotating-icon rotate-medium">♝</div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl text-white opacity-20">
          <div className="rotating-icon rotate-fast">♞</div>
        </div>
        <div className="absolute top-1/2 right-1/5 text-2xl text-white opacity-15">
          <div className="rotating-icon rotate-slow">♟</div>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-6 left-4 flex flex-col gap-2 z-10">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon
            key={index}
            icon={
              <div className={`rotating-icon ${icon.rotation}`}>
                {icon.icon}
              </div>
            }
            label={icon.label}
            onClick={() => handleIconClick(icon.window)}
          />
        ))}
      </div>
      
      {/* Windows */}
      {openWindows.includes('Portfolio') && (
        <MacWindow
          title="Portfolio - Gekka Fashion"
          initialPosition={{ x: 150, y: 150 }}
          initialSize={{ width: 600, height: 400 }}
        >
          <div className="space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2 text-white">Welcome to Sumpter, house of the biggest dumpster, Gekka</h1>
              <p className="text-sm text-gray-300">A gothic-inspired fashion portfolio</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 border border-gray-600 p-4">
                <h3 className="font-bold mb-2 text-white">Latest Collection</h3>
                <div className="space-y-2">
                  <div className="bg-gray-700 h-20 flex items-center justify-center text-gray-300 border border-gray-600">
                    [Fashion Image 1]
                  </div>
                  <div className="bg-gray-700 h-20 flex items-center justify-center text-gray-300 border border-gray-600">
                    [Fashion Image 2]
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 border border-gray-600 p-4">
                <h3 className="font-bold mb-2 text-white">Featured Items</h3>
                <div className="space-y-2">
                  <div className="bg-gray-700 h-20 flex items-center justify-center text-gray-300 border border-gray-600">
                    [Featured Item 1]
                  </div>
                  <div className="bg-gray-700 h-20 flex items-center justify-center text-gray-300 border border-gray-600">
                    [Featured Item 2]
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-2">
              <button className="mac-button">View Full Portfolio</button>
              <button className="mac-button">Shop Now</button>
            </div>
          </div>
        </MacWindow>
      )}
      
      {openWindows.includes('Shop') && (
        <MacWindow
          title="Shop - Gekka Fashion"
          initialPosition={{ x: 200, y: 200 }}
          initialSize={{ width: 500, height: 350 }}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Shop Collection</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-800 border border-gray-600 p-3">
                  <div className="bg-gray-700 h-24 flex items-center justify-center text-gray-300 mb-2 border border-gray-600">
                    [Product Image {item}]
                  </div>
                  <h4 className="font-bold text-sm text-white">Fashion Item {item}</h4>
                  <p className="text-xs text-gray-300">$99.99</p>
                  <button className="mac-button text-xs mt-1 w-full">Add to Cart</button>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-2 border-t border-gray-600">
              <span className="text-sm text-white">Total: $0.00</span>
              <button className="mac-button">Checkout</button>
            </div>
          </div>
        </MacWindow>
      )}
      
      {openWindows.includes('About') && (
        <MacWindow
          title="About - Gekka Fashion"
          initialPosition={{ x: 250, y: 250 }}
          initialSize={{ width: 400, height: 300 }}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">About Gekka Fashion</h2>
            <p className="text-sm text-gray-300">
              Welcome to Gekka Fashion, where gothic elegance meets modern style. Our unique 
              Mac-inspired interface brings a dark, sophisticated touch to your fashion shopping 
              experience.
            </p>
            <p className="text-sm text-gray-300">
              Explore our collection through our retro interface, where each element 
              is carefully crafted to reflect our gothic aesthetic and attention to detail.
            </p>
            <div className="bg-gray-800 border border-gray-600 p-3">
              <p className="text-xs text-gray-300">
                <strong className="text-white">Tip:</strong> Click on the desktop icons 
                to explore different sections of our portfolio!
              </p>
            </div>
          </div>
        </MacWindow>
      )}
      
      {/* Task Bar */}
      <TaskBar 
        openWindows={openWindows}
        onWindowClick={handleWindowClick}
      />
    </div>
  )
}
