import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import FlatButton from './FlatButton';

test('should render a button by default', async () => {
  render(<FlatButton>CLICK</FlatButton>);

  let button = screen.getByRole('button', { name: /click/i });
  expect(button).toBeInTheDocument();
});

test('should button be disabled when disabled is specified', async () => {
  render(<FlatButton disabled>CLICK</FlatButton>);

  let button = screen.getByRole('button', { name: /click/i });
  expect(button).toBeDisabled();
});

test("should render a link when 'to' is specified", async () => {
  render(
    <BrowserRouter>
      <FlatButton to="/">CLICK</FlatButton>
    </BrowserRouter>
  );

  let button = screen.getByRole('link', { name: /click/i });
  expect(button).toBeInTheDocument();
});
