import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider } from '../context/AuthContext';
import { LoginPage } from './LoginPage';

const renderLoginPage = () => {
  render(
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
};

describe('LoginPage', () => {
  it('should render login form', () => {
    renderLoginPage();
    
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });

  it('should toggle password visibility', async () => {
    const user = userEvent.setup();
    renderLoginPage();
    
    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByRole('button', { name: /toggle password visibility/i });
    
    expect(passwordInput).toHaveAttribute('type', 'password');
    
    await user.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
    
    await user.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('should show error for invalid credentials', async () => {
    const user = userEvent.setup();
    renderLoginPage();
    
    await user.type(screen.getByLabelText('Email Address'), 'invalid@example.com');
    await user.type(screen.getByLabelText('Password'), 'wrongpassword');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));
    
    await waitFor(() => {
      expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
    });
  });

  it('should show loading state during login', async () => {
    const user = userEvent.setup();
    renderLoginPage();
    
    await user.type(screen.getByLabelText('Email Address'), 'demo@example.com');
    await user.type(screen.getByLabelText('Password'), 'password');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));
    
    expect(screen.getByText('Signing in...')).toBeInTheDocument();
  });
});