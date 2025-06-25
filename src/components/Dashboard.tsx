import React, { useState, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { User, Globe, Clock, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { IdlePopup } from './IdlePopup';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [showIdlePopup, setShowIdlePopup] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds
  const WARNING_TIME = 60 * 1000; // Show warning 1 minute before timeout

  const handleIdle = () => {
    logout();
  };

  const handlePrompt = () => {
    setShowIdlePopup(true);
    
    // Start countdown for remaining time
    const warningStartTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - warningStartTime;
      const remaining = WARNING_TIME - elapsed;
      
      if (remaining <= 0) {
        clearInterval(interval);
        handleIdle();
      } else {
        setRemainingTime(remaining);
      }
    }, 100);

    // Clean up interval after warning period
    setTimeout(() => {
      clearInterval(interval);
    }, WARNING_TIME);
  };

  const { getRemainingTime, getLastActiveTime, isPrompted, reset } = useIdleTimer({
    timeout: SESSION_TIMEOUT - WARNING_TIME,
    promptTimeout: WARNING_TIME,
    onIdle: handleIdle,
    onPrompt: handlePrompt,
    debounce: 500,
  });

  const handleExtendSession = () => {
    setShowIdlePopup(false);
    reset();
  };

  const handleLogout = () => {
    setShowIdlePopup(false);
    logout();
  };

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const getTimeRemaining = () => {
    const remaining = getRemainingTime();
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Hello World App
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatTime(currentTime)}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" />
                  {user?.name}
                </div>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Hello, World! 🌍
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to your beautiful React application with idle timer functionality. 
              This demo showcases modern design patterns and user experience best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Session Info Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Session Info</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Logged in as:</p>
                  <p className="font-medium text-gray-900">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Session expires in:</p>
                  <p className="font-mono text-lg font-bold text-emerald-600">
                    {getTimeRemaining()}
                  </p>
                </div>
              </div>
            </div>

            {/* Activity Status Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Activity Status</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Current time:</p>
                  <p className="font-mono text-lg font-bold text-blue-600">
                    {formatTime(currentTime)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last active:</p>
                  <p className="font-mono text-sm text-gray-900">
                    {formatTime(new Date(getLastActiveTime()))}
                  </p>
                </div>
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Features</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  5-minute session timeout
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  Idle activity detection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Session extension popup
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  TypeScript integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Comprehensive testing
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="mt-12">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Idle Timer Demo
              </h3>
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Stop interacting with the page to test the idle timer functionality.
                  After 4 minutes of inactivity, you'll see a warning popup.
                </p>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 font-medium">
                    💡 Pro Tip: Move your mouse or press any key to reset the idle timer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <IdlePopup
        isOpen={showIdlePopup}
        remainingTime={remainingTime}
        onExtendSession={handleExtendSession}
        onLogout={handleLogout}
      />
    </>
  );
};