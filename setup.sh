#!/bin/bash

# Gekka Fashion Portfolio Setup Script
echo "🎨 Setting up Gekka Fashion Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating environment file..."
    cp env.example .env.local
    echo "✅ Environment file created (.env.local)"
    echo "⚠️  Remember to update .env.local with your actual API keys"
fi

# Create public directory if it doesn't exist
mkdir -p public

echo ""
echo "🎉 Setup complete! You can now run:"
echo "   npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "🛠️  Next steps:"
echo "   1. Update .env.local with your Stripe keys (when ready)"
echo "   2. Add your fashion images to the public/ directory"
echo "   3. Customize the portfolio content in app/page.tsx"
echo "   4. Move chess pieces around to interact with the interface!"
echo ""
