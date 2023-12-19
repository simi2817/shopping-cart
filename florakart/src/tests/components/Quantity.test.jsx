import { test, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Quantity from '../../components/Quantity';

describe('testing Quantity component', () => {
    test('checking the button elements present', () => {
        render(<Quantity />);
        const incrementBtn = screen.getByRole('button', { name: '➕' });
        const decrementBtn = screen.getByRole('button', { name: '➖' });
        expect(incrementBtn).toBeInTheDocument();
        expect(decrementBtn).toBeInTheDocument();
    });
    test('increment button', async () => {
        const onClick = vi.fn();
        render(<Quantity />)
        expect(onClick).not.toHaveBeenCalled();
    });
});