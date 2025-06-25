import { render, screen, fireEvent } from '@testing-library/react';
import { IdlePopup } from '../components/IdlePopup';

describe('IdlePopup', () => {
  const defaultProps = {
    isOpen: true,
    remainingTime: 60000, // 1 minute
    onExtendSession: jest.fn(),
    onLogout: jest.fn(),
  };

  it('should not render when closed', () => {
    render(<IdlePopup {...defaultProps} isOpen={false} />);
    
    expect(screen.queryByText('Session Timeout Warning')).not.toBeInTheDocument();
  });

  it('should render when open', () => {
    render(<IdlePopup {...defaultProps} />);
    
    expect(screen.getByText('Session Timeout Warning')).toBeInTheDocument();
    expect(screen.getByText('01:00')).toBeInTheDocument();
  });

  it('should call onExtendSession when extend button clicked', () => {
    const onExtendSession = jest.fn();
    render(<IdlePopup {...defaultProps} onExtendSession={onExtendSession} />);
    
    fireEvent.click(screen.getByText('Extend Session'));
    expect(onExtendSession).toHaveBeenCalledTimes(1);
  });

  it('should call onLogout when logout button clicked', () => {
    const onLogout = jest.fn();
    render(<IdlePopup {...defaultProps} onLogout={onLogout} />);
    
    fireEvent.click(screen.getByText('Sign Out'));
    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it('should display remaining time correctly', () => {
    render(<IdlePopup {...defaultProps} remainingTime={125000} />); // 2 minutes 5 seconds
    
    expect(screen.getByText('02:05')).toBeInTheDocument();
  });
});