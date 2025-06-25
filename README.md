# Hello World App with Idle Timer

[![Netlify Status](https://api.netlify.com/api/v1/badges/17302e96-9586-4f58-9389-dcb8d13337a6/deploy-status)](https://app.netlify.com/projects/hannas-idl-timer/deploys)

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

Visit the live application: [https://cozy-paletas-58ef12.netlify.app](https://cozy-paletas-58ef12.netlify.app)

## 🔐 Demo Credentials

- **Email**: demo@example.com
- **Password**: password

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Icons**: Lucide React
- **Idle Detection**: react-idle-timer
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite
- **Deployment**: Netlify

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

Run the test suite:
```bash
npm run test
```

Run tests with UI:
```bash
npm run test:ui
```

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard with idle timer
│   ├── IdlePopup.tsx    # Session timeout warning popup
│   └── LoginPage.tsx    # Authentication form
├── context/             # React contexts
│   └── AuthContext.tsx  # Authentication state management
├── types/               # TypeScript type definitions
│   └── auth.ts          # Authentication types
├── __tests__/           # Test files
│   ├── AuthContext.test.tsx
│   ├── IdlePopup.test.tsx
│   └── LoginPage.test.tsx
└── App.tsx              # Main application component
```

## ⚙️ Configuration

### Idle Timer Settings

The application is configured with the following idle timer settings:

- **Session Timeout**: 5 minutes
- **Warning Time**: 1 minute before timeout
- **Debounce**: 500ms to prevent excessive event handling

You can modify these settings in `src/components/Dashboard.tsx`:

```typescript
const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes
const WARNING_TIME = 60 * 1000; // 1 minute warning
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful blue to purple gradients
- **Glass Morphism**: Backdrop blur effects for modern UI
- **Micro-interactions**: Hover states and smooth transitions
- **Responsive Layout**: Mobile-first design approach
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint

### Code Quality

The project includes:

- **ESLint**: Code linting with TypeScript rules
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (via editor integration)
- **Testing**: Comprehensive test coverage

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS