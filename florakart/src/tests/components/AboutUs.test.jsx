import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import AboutUs from '../../components/AboutUs.jsx';
import { MemoryRouter } from 'react-router-dom';

test('renders a message', () => {
    const { container } = render(<MemoryRouter><AboutUs /></MemoryRouter>);
    expect(container).toMatchSnapshot();
})