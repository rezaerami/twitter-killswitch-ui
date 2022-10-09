import React, {useLayoutEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';

import CONFIGS from "constants/configs";
import {hasCookie} from "utils/cookieUtils";
import {
  Intro,
  Login,
  PrepareAccount,
  KillSwitch,
  Outro,
  Freez,
} from 'components/Views';
import GlobalStyles from 'components/styles';

import { AppContextProvider } from './context';
import { StepsEnum } from './types';
import { StyledAppWrapper } from './styles';

interface AppPropTypes {
  className?: string;
}

const App: React.FC<AppPropTypes> = ({
  className,
}: AppPropTypes) => {
  useLayoutEffect(() => {
    if(hasCookie(CONFIGS.TOKEN_COOKIE_NAME)){
      setStep(StepsEnum.PREPARE);
    }
  }, []);

  const [step, setStep] = useState(StepsEnum.INTRO);
  const stepper = {
    [StepsEnum.INTRO]: () => Intro,
    [StepsEnum.LOGIN]: () => Login,
    [StepsEnum.PREPARE]: () => PrepareAccount,
    [StepsEnum.KILL_SWITCH]: () => KillSwitch,
    [StepsEnum.OUTRO]: () => Outro,
    [StepsEnum.FREEZ]: () => Freez,
  };
  const Component = stepper?.[step]?.() ?? Login; // @todo default should be intro

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledAppWrapper className={className}>
        <AppContextProvider value={{ step, setStep }}>
          <Component />
        </AppContextProvider>
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;
