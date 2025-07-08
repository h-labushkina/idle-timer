# Hello World App with Idle Timer

[![Netlify Status](https://api.netlify.com/api/v1/badges/17302e96-9586-4f58-9389-dcb8d13337a6/deploy-status)](https://app.netlify.com/sites/hannas-idl-timer/deploys)

A beautiful React application with idle timer functionality, built with TypeScript, Tailwind CSS, and comprehensive testing.

## 🌟 Features

- **Idle Timer Management**: 5-minute session timeout with 1-minute warning
- **Authentication System**: Mock login with demo credentials
- **Session Extension**: Popup warning with options to extend or logout
- **Real-time Clock**: Live time display and session countdown
- **Responsive Design**: Beautiful gradient UI that works on all devices
- **TypeScript**: Full type safety throughout the application
- **Comprehensive Testing**: Unit tests for all components and contexts
- **Modern Architecture**: Clean component structure with React hooks

## 🚀 Live Demo

Visit the live application: **[hannas-idl-timer.netlify.app](https://hannas-idl-timer.netlify.app)**

## 🔐 Demo Credentials

- **Email**: `demo@example.com`
- **Password**: `password`

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom gradients and glass morphism
- **Icons**: Lucide React
- **Idle Detection**: react-idle-timer
- **Testing**: Jest + React Testing Library + Jest DOM
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Code Quality**: ESLint + TypeScript strict mode

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hello-world-idle-timer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧪 Testing

The application includes comprehensive test coverage for all components and contexts.

Run the test suite:
```bash
npm run test
```

Run tests with interactive UI:
```bash
npm run test:ui
```

### Test Coverage

- **AuthContext**: Login/logout functionality and state management
- **LoginPage**: Form validation, password visibility, error handling
- **IdlePopup**: Timer display, button interactions, conditional rendering
- **Dashboard**: Session management and user interface

## 🏗️ Build & Deploy

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

The application is automatically deployed to Netlify when changes are pushed to the main branch.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard with idle timer functionality
│   ├── IdlePopup.tsx    # Session timeout warning modal
│   └── LoginPage.tsx    # Authentication form with validation
├── context/             # React contexts
│   └── AuthContext.tsx  # Authentication state management with reducer
├── types/               # TypeScript type definitions
│   └── auth.ts          # User and authentication interfaces
├── __tests__/           # Comprehensive test suite
│   ├── AuthContext.test.tsx
│   ├── IdlePopup.test.tsx
│   └── LoginPage.test.tsx
├── App.tsx              # Main application component with routing logic
├── main.tsx             # Application entry point
└── index.css            # Tailwind CSS imports
```

## ⚙️ Configuration

### Idle Timer Settings

The application uses the following idle timer configuration:

- **Total Session Time**: 5 minutes (300,000ms)
- **Warning Period**: 1 minute before timeout
- **Activity Detection**: Mouse movement, keyboard input, touch events
- **Debounce Delay**: 500ms to optimize performance

Modify these settings in `src/components/Dashboard.tsx`:

```typescript
const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes total
const WARNING_TIME = 60 * 1000; // 1 minute warning period
```

### Authentication

The demo uses mock authentication with these credentials:
- Email: `demo@example.com`
- Password: `password`

To integrate with a real authentication system, update the `login` function in `src/context/AuthContext.tsx`.

## 🎨 Design Features

### Visual Design
- **Gradient Backgrounds**: Multi-color gradients (blue → indigo → purple)
- **Glass Morphism**: Backdrop blur effects with semi-transparent backgrounds
- **Micro-interactions**: Smooth hover states and scale transforms
- **Responsive Grid**: Adaptive layouts for mobile, tablet, and desktop
- **Typography**: Gradient text effects and proper font hierarchy

### User Experience
- **Loading States**: Visual feedback during authentication
- **Error Handling**: Clear error messages and validation
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Progressive Disclosure**: Information revealed contextually

## 🔧 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run test suite in watch mode |
| `npm run test:ui` | Launch interactive test UI |
| `npm run lint` | Run ESLint code analysis |

### Code Quality Tools

- **ESLint**: Configured with React and TypeScript rules
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Vitest**: Fast unit testing with Jest-compatible API
- **React Testing Library**: Component testing best practices

### Development Guidelines

1. **Components**: Keep components focused and reusable
2. **Types**: Define interfaces for all props and state
3. **Testing**: Write tests for all user interactions
4. **Styling**: Use Tailwind utility classes consistently
5. **Performance**: Optimize re-renders with proper dependency arrays

## 🚀 Deployment

The application is deployed on Netlify with automatic deployments from the main branch.

**Live URL**: [hannas-idl-timer.netlify.app](https://hannas-idl-timer.netlify.app)

### Deployment Status

The Netlify status badge at the top of this README shows the current deployment status:
- ✅ **Success**: Latest deployment is live
- 🔄 **Building**: New deployment in progress
- ❌ **Failed**: Deployment encountered errors

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Ensure all tests pass: `npm run test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📞 Support

If you have any questions or need help:

1. Check the [Issues](../../issues) for existing solutions
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

*Last updated: January 2025*