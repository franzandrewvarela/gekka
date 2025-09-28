# Gekka Fashion Portfolio

A retro Mac OS-inspired fashion portfolio website with an interactive chess board background. Built with Next.js, React, and Tailwind CSS.

## Features

- 🖥️ Classic Mac OS UI aesthetic with authentic window styling
- ♟️ Interactive chess board background with draggable pieces
- 👗 Fashion portfolio showcase with modern e-commerce capabilities
- 🛒 Shopping cart and checkout functionality (Stripe-ready)
- 📱 Responsive design that works on all devices
- ✨ Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gekkaWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Mac OS theming
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── ChessBoard.tsx       # Interactive chess board component
│   ├── MacWindow.tsx        # Mac OS window component
│   ├── DesktopIcon.tsx      # Desktop icon component
│   ├── MenuBar.tsx          # Mac OS menu bar
│   └── TaskBar.tsx          # Mac OS task bar
└── public/                  # Static assets
```

## Key Components

### Chess Board
- Interactive chess pieces that can be dragged and moved
- Real-time board state reflection
- Reset functionality
- Responsive positioning

### Mac OS UI
- Authentic window styling with title bars and controls
- Desktop icons with hover effects
- Menu bar with dropdown menus
- Task bar with window management

### Fashion Portfolio
- Collection showcase
- Product grid layout
- Shopping cart functionality
- Checkout process (Stripe integration ready)

## Future Enhancements

- [ ] Stripe payment integration
- [ ] User authentication
- [ ] Admin dashboard for content management
- [ ] Advanced chess game features
- [ ] Mobile app version
- [ ] Social media integration

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Chess.js** - Chess logic
- **React Chessboard** - Chess UI components
- **Lucide React** - Icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details