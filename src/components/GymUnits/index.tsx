import { useContext } from 'react';
import GymContext from '../../context/GymContext';
import { GymAPIType } from '../../types';
import './gym-units.css';
import GymUnitInfo from '../GymUnitInfo';

type GymUnitsType = {
  gyms?: GymAPIType;
};

const GymUnits = () => {
  const { gyms }: GymUnitsType = useContext(GymContext);
  if (!gyms) return null;
  const { locations } = JSON.parse(JSON.stringify(gyms));
  // console.log(locations);
  const initialGyms = [locations[0], locations[1], locations[2]];
  return (
    <div className='gym-units__container'>
      {initialGyms.map((item) => (
        <GymUnitInfo key={item.id} info={item} />
      ))}
    </div>
  );
};

export default GymUnits;
