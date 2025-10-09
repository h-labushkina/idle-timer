import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {GlobalLoader} from './GlobalLoader';

describe('GlobalLoader', () => {
    it('renders the loader with the correct structure', () => {
        render(<GlobalLoader/>);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('applies the correct classes for styling', () => {
        render(<GlobalLoader/>);
        const loader = screen.getByRole('status');
        expect(loader).toHaveClass('w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin');
    });
})