import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '../App.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renders headline', () => {
    const { container } = render(<MemoryRouter><App /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });
});