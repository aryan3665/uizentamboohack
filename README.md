# 🛍️ ShopFlow - AI-Powered E-Commerce Experience

<div align="center">
  <img src="public/shopflow-banner.svg" alt="ShopFlow Banner" width="600"/>
  
  [![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
  [![Powered by Tambo](https://img.shields.io/badge/Powered%20by-Tambo%20AI-blue?style=for-the-badge)](https://tambo.ai)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
</div>

---

## 🚀 Overview

**ShopFlow** revolutionizes online shopping by combining the power of conversational AI with a stunning e-commerce interface. Simply describe what you're looking for, and watch as our AI assistant dynamically renders personalized product recommendations, applies filters, and helps you discover exactly what you need.

### 🎯 The Problem

Traditional e-commerce platforms force users through rigid navigation patterns, endless filtering options, and overwhelming product catalogs. Finding the right product often feels like searching for a needle in a haystack.

### 💡 Our Solution

ShopFlow introduces a **conversational commerce paradigm** where users can:
- Describe what they want in natural language
- Get AI-rendered product grids tailored to their needs
- Apply complex filters through simple conversation
- Receive personalized recommendations based on context

---

## ✨ Features

### 🤖 AI-Powered Shopping Assistant
- **Natural Language Queries**: "Show me electronics under $100" or "Find me a stylish jacket"
- **Dynamic UI Rendering**: AI generates and renders product components in real-time
- **Context-Aware Responses**: Remembers your preferences throughout the session

### 🎨 Beautiful, Modern UI
- **Glassmorphism Design**: Stunning frosted glass effects
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Responsive Layout**: Perfect experience on any device
- **Micro-Animations**: Delightful hover effects and transitions

### 🛒 Full E-Commerce Functionality
- **Product Catalog**: Browse 20+ products across 4 categories
- **Smart Filtering**: Category, price range, rating, and search
- **Shopping Cart**: Add, remove, and manage items
- **Real-time Updates**: Instant UI updates without page refresh

### 🔧 Technical Excellence
- **Type-Safe**: Full TypeScript implementation
- **Component Registration**: Tambo-powered AI component rendering
- **API Integration**: FakeStore API for realistic product data
- **State Management**: React Context for global state

---

## 📁 Project Structure
shopflow/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Root layout
│   │   ├── dashboard/
│   │   │   └── page.tsx          # AI Chat dashboard
│   │   └── products/
│   │       └── page.tsx          # Products catalog
│   ├── components/
│   │   ├── landing/              # Landing page components
│   │   ├── dashboard/            # Dashboard components
│   │   ├── common/               # Shared components
│   │   ├── tambo/                # AI-renderable components
│   │   └── ui/                   # Base UI components
│   ├── context/                  # React Context providers
│   ├── services/                 # API services
│   └── lib/                      # Utilities & Tambo config
├── public/                       # Static assets
└── ...config files



---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **Tambo AI** | Conversational AI & component rendering |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **FakeStore API** | Product data source |
| **React Context** | State management |
| **Lucide Icons** | Beautiful iconography |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Tambo API key

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/shopflow.git
cd shopflow

# Install dependencies
npm install

# Set up environment variables
cp example.env.local .env.local
# Add your TAMBO_API_KEY to .env.local

# Run the development server
npm run dev


Example Queries
text

"Show me all electronics"
"Find products under $50"
"I need a men's jacket with good ratings"
"Compare the top-rated jewelry items"
"Add the cheapest laptop to my cart"

🤝 Contributing
We welcome contributions! Please see our Contributing Guide for details.

🙏 Acknowledgments
Tambo AI for the incredible AI platform
FakeStore API for product data
Lucide for beautiful icons
Tailwind CSS for styling utilities


Authors & Team 
Team name :- Uizards
authors :- Pratik Dubey , Aryan Tripathi
