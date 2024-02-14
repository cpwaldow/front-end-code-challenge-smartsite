import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component test', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('Footer title should be in the document', () => {
    expect(
      screen.getByText('Todos os direitos reservados - 2020'),
    ).toBeInTheDocument();
  });
  it('Footer should have logo in the document', () => {
    expect(screen.getByAltText('Smart Fit Logo')).toBeInTheDocument();
  });
});
