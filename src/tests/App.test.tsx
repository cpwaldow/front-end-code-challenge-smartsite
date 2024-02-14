import { render, screen } from '@testing-library/react';
import App from '../App';

it('should show "REABERTURA SMART FIT" text', () => {
  render(<App />);
  expect(screen.getByText('REABERTURA SMART FIT')).toBeInTheDocument();
});
