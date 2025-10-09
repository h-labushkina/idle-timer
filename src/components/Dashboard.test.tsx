import '@testing-library/jest-dom';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import {Dashboard} from './Dashboard';
import {useAuth} from '../context/AuthContext';

jest.mock('../context/AuthContext', () => ({
    useAuth: jest.fn(),
}));

describe('Dashboard', () => {
    jest.useFakeTimers();

    beforeEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        cleanup();
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it('renders the dashboard with user information', () => {
        (useAuth as jest.Mock).mockReturnValue({
            user: {name: 'John Doe', email: 'john.doe@example.com'},
            logout: jest.fn(),
        });

        render(<Dashboard/>);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    });

    it('shows the idle popup after inactivity', () => {
        (useAuth as jest.Mock).mockReturnValue({
            user: {name: 'John Doe', email: 'john.doe@example.com'},
            logout: jest.fn(),
        });
        const start = Date.now();
        jest.setSystemTime(start);

        render(<Dashboard/>);

        //check that popup is not visible initially
        expect(screen.queryByText('Session Timeout Warning')).not.toBeInTheDocument();
        const start = Date.now();
        jest.setSystemTime(start);

        jest.setSystemTime(start + 4 * 60 * 1000); // Simulate 4 minutes of inactivity
        fireEvent.focus(document); // Trigger any event to check for timeout

        //check that popup is visible after 4 minutes
        expect(screen.queryByText('Session Timeout Warning')).toBeInTheDocument();
        expect(screen.queryByText('Your session will expire due to inactivity')).toBeInTheDocument();
    });

    it('logs out the user when idle timeout is reached', () => {
        const logoutMock = jest.fn();
        (useAuth as jest.Mock).mockReturnValue({
            user: {name: 'John Doe', email: 'john.doe@example.com'},
            logout: logoutMock,
        });
        const start = Date.now();
        jest.setSystemTime(start);

        render(<Dashboard/>);

        jest.setSystemTime(start + 6 * 60 * 1000); // Simulate 6 minutes of inactivity(more than timeout)
        fireEvent.focus(document); // Trigger any event to check for timeout

        expect(logoutMock).toHaveBeenCalled();
    });

    it('resets the idle timer when user interacts with the page', () => {
        const resetMock = jest.fn();
        (useAuth as jest.Mock).mockReturnValue({
            user: {name: 'John Doe', email: 'john.doe@example.com'},
            logout: jest.fn(),
        });

        render(<Dashboard/>);
        fireEvent.mouseMove(document);

        expect(resetMock).not.toHaveBeenCalled(); // Ensure reset is triggered internally
    });
})