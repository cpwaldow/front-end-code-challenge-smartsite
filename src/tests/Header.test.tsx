import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component tests', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Header title should be in the document', () => {
    const headerTitle = screen.getByTestId('header-title');
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toHaveTextContent('REABERTURA SMART FIT');
  });
  it('Header description should be in the document', () => {
    const headerDescriptionText =
      'O horário de funcionamento das nossas unidades stá seguindo os decretos de cada município. Por isso, confira aqui e a sua unidade está aberta e as medidas de segurança que estamos seguindo.';
    const headerDescription = screen.getByTestId('header-description');
    expect(headerDescription).toHaveTextContent(headerDescriptionText);
  });
  it('Header should have logo in the document', () => {
    const headerLogo = screen.getByAltText('Smart Fit Logo');
    expect(headerLogo).toBeInTheDocument();
  });
});
