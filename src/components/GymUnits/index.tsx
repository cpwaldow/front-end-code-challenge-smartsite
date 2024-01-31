import { useContext } from 'react';
import GymContext from '../../context/GymContext';
import GymAPIType from '../../types';

type GymUnitsType = {
  gyms?: GymAPIType;
};

const GymUnits = () => {
  const { gyms }: GymUnitsType = useContext(GymContext);
  if (!gyms) return null;
  const { locations } = JSON.parse(JSON.stringify(gyms));
  console.log(locations);
  const initialGyms = [locations[0], locations[1], locations[2]];
  return (
    <div>
      {initialGyms.map((item) => (
        <section key={item.id}>
          <p>{item.opened ? 'Aberto' : 'Fechado'}</p>
        </section>
      ))}
    </div>
  );
};

export default GymUnits;
