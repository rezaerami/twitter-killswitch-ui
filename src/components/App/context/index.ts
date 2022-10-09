import { createContext } from 'react';
import { StepsEnum } from '../types';

export interface AppContextInterface {
  step: string;
  setStep: (step: StepsEnum) => void;
}

const AppContext = createContext({} as AppContextInterface);
const { Provider: AppContextProvider, Consumer: AppContextConsumer } =
  AppContext;

export { AppContext, AppContextProvider, AppContextConsumer };
