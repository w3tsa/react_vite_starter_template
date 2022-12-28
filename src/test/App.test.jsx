import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from '../App';

describe('App', () => {
  it('Renders hello world', () => {
    // Arrange -> we arrange our test setup
    render(<WrappedApp />);
    // Act -> do the things that a user would do with the component
    // Expect -> we checked to see after the user interacted with the page we got what we expected
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Hello World');
  });
  /* --------- Not found Test ---------- */
  it('Renders not found if invalid path', () => {
    // Arrange -> we arrange our test setup
    render(
      <MemoryRouter initialEntries={['/badPath']}>
        <App />
      </MemoryRouter>,
    );
    // Act -> do the things that a user would do with the component
    // Expect -> we checked to see after the user interacted with the page we got what we expected
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Not Found');
  });
  /* --------- About page Test ---------- */
  it('Renders Hello About', () => {
    // Arrange -> we arrange our test setup
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>,
    );
    // Act -> do the things that a user would do with the component
    // Expect -> we checked to see after the user interacted with the page we got what we expected
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Hello About');
  });
});
