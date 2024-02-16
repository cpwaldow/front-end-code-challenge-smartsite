import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Form component test', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('Verify component texts', () => {
    expect(screen.getByText('Horário')).toBeInTheDocument();
    expect(screen.getByText('Qual período quer treinar?')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('Verify exist 3 inputs type radio and 1 input type checkbox', () => {
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('Verify inputs text', () => {
    expect(screen.getByText('Manhã')).toBeInTheDocument();
    expect(screen.getByText('06:00 às 12:00')).toBeInTheDocument();
    expect(screen.getByText('Tarde')).toBeInTheDocument();
    expect(screen.getByText('12:01 às 18:00')).toBeInTheDocument();
    expect(screen.getByText('Noite')).toBeInTheDocument();
    expect(screen.getByText('18:01 às 23:00')).toBeInTheDocument();
    expect(screen.getByText('Exibir unidades fechadas')).toBeInTheDocument();
    expect(screen.getByText('Resultados encontrados:')).toBeInTheDocument();
  });
  it('Verify exist 2 buttons on page', () => {
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
  it('Verify buttons text', () => {
    expect(screen.getByText('ENCONTRAR UNIDADE')).toBeInTheDocument();
    expect(screen.getByText('LIMPAR')).toBeInTheDocument();
  });
});
