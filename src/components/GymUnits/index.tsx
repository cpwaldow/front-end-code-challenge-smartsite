import { useContext } from 'react';
import GymContext from '../../context/GymContext';
import { GymUnitsType, LocationsApiType } from '../../types';
import './gym-units.css';
import GymUnitInfo from '../GymUnitInfo';

type LocationsType = {
  locations: LocationsApiType[];
};

const GymUnits = () => {
  const { gyms }: GymUnitsType = useContext(GymContext);
  if (!gyms) return null;

  const { locations }: LocationsType = JSON.parse(JSON.stringify(gyms));
  return (
    <div className='gym-units__container'>
      {locations.map((item, index) => (
        <GymUnitInfo key={`${item.content} - ${index}`} info={item} />
      ))}
    </div>
  );
};

export default GymUnits;
