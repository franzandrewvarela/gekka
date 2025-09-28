'use client'

import { useState } from 'react'

export default function MenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const menuItems = [
    {
      label: 'File',
      items: ['New Portfolio', 'Open Collection', 'Save Work', 'Export Images', 'Print Portfolio', 'Quit']
    },
    {
      label: 'Edit',
      items: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste', 'Select All']
    },
    {
      label: 'View',
      items: ['Show Desktop Icons', 'Arrange Icons', 'Refresh', 'Show Chess Board', 'Full Screen']
    },
    {
      label: 'Portfolio',
      items: ['New Collection', 'Edit Collection', 'Delete Collection', 'Import Photos', 'Export Portfolio']
    },
    {
      label: 'Shop',
      items: ['View Cart', 'Checkout', 'Order History', 'Payment Settings', 'Shipping Info']
    },
    {
      label: 'Help',
      items: ['About Gekka', 'User Guide', 'Contact Support', 'Keyboard Shortcuts']
    }
  ]

  return (
    <div className="mac-menu-bar">
      {menuItems.map((menu) => (
        <div key={menu.label} className="relative">
          <div
            className="mac-menu-item"
            onMouseEnter={() => setActiveMenu(menu.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menu.label}
          </div>
          
          {activeMenu === menu.label && (
            <div className="absolute top-full left-0 bg-gray-200 border border-gray-400 shadow-lg z-50 min-w-48">
              {menu.items.map((item, index) => (
                <div
                  key={index}
                  className="px-3 py-1 text-xs hover:bg-blue-600 hover:text-white cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      <div className="ml-auto text-xs">
        Gekka Fashion Portfolio v1.0
      </div>
    </div>
  )
}
