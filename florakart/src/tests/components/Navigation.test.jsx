import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation.jsx';

test('renders a message', () => {
    const { container } = render(<MemoryRouter><Navigation /></MemoryRouter>);
    expect(container).toMatchSnapshot();
})