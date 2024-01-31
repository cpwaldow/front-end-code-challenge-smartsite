import { createContext } from 'react';
import GymAPIType from '../types';

type GymContextType = {
  gyms: GymAPIType | undefined;
};

const GymContext = createContext({} as GymContextType);

export default GymContext;
