import { useContext } from 'react';
import GymContext from '../../context/GymContext';
import { GymUnitsType, LocationsApiType } from '../../types';
import './gym-units.css';
import GymUnitInfo from '../GymUnitInfo';

const GymUnits = () => {
  const { gyms }: GymUnitsType = useContext(GymContext);

  return (
    <div className='gym-units__container'>
      {gyms?.locations.map((item: LocationsApiType, index: number) => (
        <GymUnitInfo key={`${item.content} - ${index}`} info={item} />
      ))}
    </div>
  );
};

export default GymUnits;
