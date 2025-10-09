import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '../context/AuthContext';

const TestComponent = () => {
  const { user, isAuthenticated, login, logout, isLoading } = useAuth();

  return (
    <div>
      <div data-testid="auth-status">
        {isAuthenticated ? 'authenticated' : 'no-loged-in'}
      </div>
      <div data-testid="user-email">{user?.email || 'no-user'}</div>
      <div data-testid="loading-status">{isLoading ? 'loading' : 'not-loading'}</div>
      <button
        onClick={() => login('demo@example.com', 'password')}
        data-testid="login-button"
      >
        Login
      </button>
      <button onClick={logout} data-testid="logout-button">
        Logout
      </button>
    </div>
  );
};

describe('AuthContext', () => {
  const renderWithAuth = () => {
    return render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
  };

  it('should start with unauthenticated state', () => {
    renderWithAuth();
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('no-loged-in');
    expect(screen.getByTestId('user-email')).toHaveTextContent('no-user');
    expect(screen.getByTestId('loading-status')).toHaveTextContent('not-loading');
  });

  it('should authenticate user with valid credentials', async () => {
    renderWithAuth();
    fireEvent.click(screen.getByTestId('login-button'));

    // Check loading state
    expect(screen.getByTestId('loading-status')).toHaveTextContent('loading');
    
    // Wait for authentication to complete
    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
    });
    
    expect(screen.getByTestId('user-email')).toHaveTextContent('demo@example.com');
    expect(screen.getByTestId('loading-status')).toHaveTextContent('not-loading');
  });

  it('should logout user', async () => {
    renderWithAuth();
    
    // First login
    fireEvent.click(screen.getByTestId('login-button'));
    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
    });
    
    // Then logout
    fireEvent.click(screen.getByTestId('logout-button'));
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('no-loged-in');
    expect(screen.getByTestId('user-email')).toHaveTextContent('no-user');
  });
});