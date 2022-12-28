import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Nav from './Nav';

describe('Nav', () => {
  it('Renders Hello Nav', () => {
    render(<Nav />);

    expect(screen.getAllByRole('navigation')).toHaveLength(1);
  });
});
