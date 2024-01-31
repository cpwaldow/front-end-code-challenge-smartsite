import { useEffect, useState } from 'react';
import GymContext from './GymContext';
import { GymAPIType } from '../types';
import fetchAPI from '../services/fetch';

type GymProviderPropsType = {
  children: React.ReactNode;
};

const GymProvider = ({ children }: GymProviderPropsType) => {
  const [gymData, setGymData] = useState<GymAPIType | undefined>();

  useEffect(() => {
    (async () => {
      setGymData(await fetchAPI());
    })();
  }, []);

  return (
    <GymContext.Provider
      value={{
        gyms: gymData,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};

export default GymProvider;
