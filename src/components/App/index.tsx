import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';

import {
  Intro,
  Login,
  PrepareAccount,
  KillSwitch,
  Outro,
  Freez,
} from 'components/Views';
import GlobalStyles from 'components/styles';

import { StyledAppWrapper } from './styles';

interface AppPropTypes {
  className?: string;
}

enum StepsEnum {
  INTRO = 'INTRO',
  LOGIN = 'LOGIN',
  PREPARE = 'PREPARE',
  KILL_SWITCH = 'KILL_SWITCH',
  OUTRO = 'OUTRO',
  FREEZ = 'FREEZ',
}

const App: React.JSXElementConstructor<AppPropTypes> = ({
  className,
}: AppPropTypes) => {
  const step = StepsEnum.INTRO;
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
        <Component />
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;
