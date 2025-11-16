# React + TypeScript + Vite Template

A modern, production-ready React template with TypeScript, Vite, TailwindCSS, React Router, and Vitest. Perfect for quickly starting new React projects with best practices baked in.

## ✨ Features

- ⚡️ **Vite** - Lightning-fast development and build tool
- ⚛️ **React 19** - Latest version with concurrent features
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **TailwindCSS v4** - Utility-first CSS framework
- 🧭 **React Router v7** - Client-side routing
- 🧪 **Vitest** - Fast unit testing framework
- 📏 **ESLint** - Code linting with TypeScript support
- 💅 **Prettier** - Code formatting
- 🎯 **Path Aliases** - Clean imports with `@/` prefix
- 📦 **Component Library** - Custom UI kit integration

## 📁 Project Structure

```
template-vite-react-app/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   ├── features/       # Feature-based modules
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Third-party library configurations
│   ├── pages/          # Page components (route components)
│   ├── test/           # Test utilities and setup
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Root application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .env.example        # Environment variables template
├── eslint.config.js    # ESLint configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository** (or use as template):
   ```bash
   git clone https://github.com/AchilleasMich/template-vite-react-app.git
   cd template-vite-react-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   The app will be running at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run tests in watch mode
- `npm test -- --run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate test coverage report
- `npm run type-check` - Check TypeScript types

## 🎯 Path Aliases

The project uses path aliases for cleaner imports:

```typescript
// Instead of: import Button from '../../../components/Button'
import Button from '@/components/Button'

// Instead of: import Home from '../../pages/Home'
import Home from '@pages/Home'
```

Available aliases:
- `@/*` → `src/*`
- `@pages/*` → `src/pages/*`
- `@ui-kit` → Custom UI kit package

## 🧪 Testing

This template uses Vitest for testing with React Testing Library:

```typescript
// Example test
import { render, screen } from '@testing-library/react'
import Home from '@pages/Home'

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
```

## 🎨 Styling

TailwindCSS v4 is configured and ready to use:

```tsx
<div className="flex items-center justify-center h-screen bg-gray-100">
  <h1 className="text-4xl font-bold">Hello World</h1>
</div>
```

You can also use the `cn` utility for conditional classes:

```tsx
import { cn } from '@/utils/cn'

<div className={cn("base-class", isActive && "active-class")}>
```

## 🏗️ Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

Access in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

### TypeScript

TypeScript configuration is split into multiple files:
- `tsconfig.json` - Base configuration with path aliases
- `tsconfig.app.json` - App-specific configuration
- `tsconfig.node.json` - Node.js configuration for Vite

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [React Router](https://reactrouter.com/)

## 📞 Support

If you have any questions or run into issues, please [open an issue](https://github.com/AchilleasMich/template-vite-react-app/issues).

---

**Happy coding! 🚀**
