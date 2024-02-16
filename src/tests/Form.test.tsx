import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Form component test', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('Render correct info about form', () => {
    expect(screen.getByText('Horário')).toBeInTheDocument();
    expect(screen.getByText('Qual período quer treinar?')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
