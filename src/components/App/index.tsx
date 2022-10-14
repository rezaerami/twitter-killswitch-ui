import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';

import CONFIGS from 'constants/configs';
import { hasCookie } from 'utils/cookieUtils';
import {
  Freeze,
  Intro,
  KillSwitch,
  Login,
  Outro,
  PrepareAccount,
} from 'components/Views';
import GlobalStyles from 'components/styles';

import { AppContextProvider } from './context';
import { StepsEnum } from './types';
import { StyledAppWrapper } from './styles';

interface AppPropTypes {
  className?: string;
}

const App: React.FC<AppPropTypes> = ({ className }: AppPropTypes) => {
  const [step, setStep] = useState(StepsEnum.INTRO);
  const [freeze, setFreeze] = useState(false);

  useLayoutEffect(() => {
    let currentStep = StepsEnum.INTRO;

    if (hasCookie(CONFIGS.OPERATION_COMPLETED_COOKIE_NAME)) {
      currentStep = StepsEnum.FREEZE;
    }
    if (hasCookie(CONFIGS.TOKEN_COOKIE_NAME)) {
      currentStep = StepsEnum.PREPARE;
    }
    if (hasCookie(CONFIGS.OPERATION_IS_READY_COOKIE_NAME)) {
      currentStep = StepsEnum.KILL_SWITCH;
    }

    setStep(currentStep);
  }, [setStep]);

  /**
   * opens debugger if someone attempted to open inspect element and developer console
   */
  useEffect(() => {
    window.addEventListener('blur', handleFreeze);
    window.addEventListener('focus', handleFreeze);

    return () => {
      window.removeEventListener('blur', handleFreeze);
      window.removeEventListener('focus', handleFreeze);
    };
  }, []);

  useEffect(() => {
    if (freeze) {
      handleFreeze();
    }
  }, [freeze]);

  const stepper = {
    [StepsEnum.INTRO]: () => Intro,
    [StepsEnum.LOGIN]: () => Login,
    [StepsEnum.PREPARE]: () => PrepareAccount,
    [StepsEnum.KILL_SWITCH]: () => KillSwitch,
    [StepsEnum.OUTRO]: () => Outro,
    [StepsEnum.FREEZE]: () => Freeze,
  };
  const Component = stepper?.[step]?.() ?? Login; // @todo default should be intro

  /**
   * creates an infinite loop to crash the browser so,
   * no one can see what is inside localstorage and cookie storage
   */
  const handleFreeze = (): void => {
    console.log(process.env.NODE_ENV);
    if (process.env.REACT_APP_DEBUG !== 'true') {
      while (true) {
        // eslint-disable-next-line no-debugger
        debugger;
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledAppWrapper className={className}>
        <AppContextProvider value={{ step, setStep, setFreeze }}>
          <Component />
        </AppContextProvider>
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;
