import { useContext } from 'react';
import GymContext from '../../context/GymContext';
import {
  GymUnitsType,
  SchedulesLocationsType,
  LocationsApiType,
  BtnFindUnitType,
  HandleLocationOpenedType,
  PeriodHoursType,
} from '../../types';

const periodHors: PeriodHoursType = {
  ['Manhã']: {
    open: 6,
    close: 12,
  },
  Tarde: {
    open: 12,
    close: 18,
  },
  Noite: {
    open: 18,
    close: 23,
  },
};

const BtnFindUnit = ({ period }: BtnFindUnitType) => {
  const { gyms }: GymUnitsType = useContext(GymContext);
  if (!gyms) return null;

  const handleSchedule = (schedule: SchedulesLocationsType) =>
    schedule
      .filter((data) => data.hour.includes('às'))
      .map((item) =>
        item.hour.split(' às ').map((hour) => Number(hour.replace('h', ''))),
      );

  const handleLocationOpened = () =>
    gyms.locations
      .filter((item: LocationsApiType) => item.opened)
      .map((item: LocationsApiType) => ({
        id: item.id,
        schedules: handleSchedule(item.schedules),
      }));

  const handleClick = () => {
    if (period === '') {
      alert('Selecione um período para continuar');
      return null;
    }

    const filterGymOpenByPeriod = handleLocationOpened().filter(
      (element: HandleLocationOpenedType) =>
        element.schedules.some((item) =>
          item.some(
            (hour) =>
              hour >= periodHors[period].open &&
              hour <= periodHors[period].close,
          ),
        ),
    );
    // console.log(filterGymOpenByPeriod);
  };

  return (
    <button
      className='form__btn btn__find__unit'
      type='submit'
      onClick={handleClick}
    >
      ENCONTRAR UNIDADE
    </button>
  );
};

export default BtnFindUnit;
