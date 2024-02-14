import { render, screen } from '@testing-library/react';
import GymUnitInfo from '../components/GymUnitInfo';

const gymInfos = [
  {
    id: 10998878976097,
    title: 'Dom Severino',
    content: '\n<p>Av. Dom Severino, 1733 &#8211; Fátima<br>Teresina, PI</p>\n',
    opened: true,
    mask: 'required',
    towel: 'required',
    fountain: 'partial',
    locker_room: 'allowed',
    schedules: [
      { weekdays: 'Seg. à Sex.', hour: '06h às 22h' },
      { weekdays: 'Sáb.', hour: 'Fechada' },
      { weekdays: 'Dom.', hour: 'Fechada' },
    ],
  },
  {
    id: 10998878976079,
    title: 'Presidente Prudente',
    content:
      '\n<p>Rua Siqueira Campos, 1545 &#8211; Vila Roberto<br>Presidente Prudente, SP</p>\n',
    opened: false,
    mask: 'required',
    towel: 'required',
    fountain: 'partial',
    locker_room: 'allowed',
    schedules: [
      { weekdays: 'Seg. à Sex.', hour: 'Fechada' },
      { weekdays: 'Sáb.', hour: 'Fechada' },
      { weekdays: 'Dom.', hour: 'Fechada' },
    ],
  },
];

const icons = [
  'mask - required',
  'towel - required',
  'fountain - partial',
  'lockerroom - allowed',
];

describe('GymUnitInfo component test gym', () => {
  it('Render the correct info about Gym open', () => {
    render(<GymUnitInfo info={gymInfos[0]} />);
    const isOpenOrIsClose = screen.getByTestId('isOpen-or-isClose');
    expect(isOpenOrIsClose).toHaveTextContent('Aberto');
    expect(screen.getByText('Dom Severino')).toBeInTheDocument();
    expect(
      screen.getByText('Av. Dom Severino, 1733 - Fátima'),
    ).toBeInTheDocument();
    expect(screen.getByText('Teresina, PI')).toBeInTheDocument();
    icons.forEach((item) => {
      expect(screen.getByAltText(item)).toBeInTheDocument();
    });
    expect(screen.getByText('Seg. à Sex.')).toBeInTheDocument();
    expect(screen.getByText('06h às 22h')).toBeInTheDocument();
    expect(screen.getByText('Sáb.')).toBeInTheDocument();
    expect(screen.getAllByText('Fechada')[0]).toBeInTheDocument();
    expect(screen.getByText('Dom.')).toBeInTheDocument();
    expect(screen.getAllByText('Fechada')[1]).toBeInTheDocument();
  });

  it('Render the correct info about Gym close', () => {
    render(<GymUnitInfo info={gymInfos[1]} />);
    const isOpenOrIsClose = screen.getByTestId('isOpen-or-isClose');
    expect(isOpenOrIsClose).toHaveTextContent('Fechado');
    expect(screen.getByText('Presidente Prudente')).toBeInTheDocument();
    expect(
      screen.getByText('Rua Siqueira Campos, 1545 - Vila Roberto'),
    ).toBeInTheDocument();
    expect(screen.getByText('Presidente Prudente, SP')).toBeInTheDocument();
    expect(() => screen.getByText('Seg. à Sex.')).toThrow();
    icons.forEach((item) => {
      expect(() => screen.getByAltText(item)).toThrow();
    });
  });
});
