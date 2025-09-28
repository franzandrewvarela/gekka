// Type definitions for Gekka Fashion Portfolio

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  sizes: string[]
  colors: string[]
  inStock: boolean
  featured: boolean
}

export interface Collection {
  id: string
  name: string
  description: string
  images: string[]
  products: Product[]
  featured: boolean
  createdAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  cart: CartItem[]
  favorites: string[]
  orders: Order[]
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  billingAddress: Address
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface ChessPiece {
  id: string
  type: 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'
  color: 'white' | 'black'
  position: { x: number; y: number }
  originalPosition: { x: number; y: number }
}

export interface WindowState {
  id: string
  title: string
  position: { x: number; y: number }
  size: { width: number; height: number }
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
}
