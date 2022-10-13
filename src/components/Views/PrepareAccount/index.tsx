import React, { useContext, useLayoutEffect } from 'react';

import TwitterIcon from 'resources/icons/TwitterIcon';
import MESSAGES from 'constants/messages';

import CONFIGS from 'constants/configs';
import { hasCookie, setCookie } from 'utils/cookieUtils';
import { AppContext } from 'components/App/context';
import { StepsEnum } from 'components/App/types';

import {
  StyledButton,
  StyledButtonWrapper,
  StyledPrepareAccountWrapper,
  StyledSignal,
  StyledTitle,
} from './styles';

export interface PrepareAccount {
  className?: string;
}
const Login: React.FC<PrepareAccount> = ({ className }: PrepareAccount) => {
  const { setStep } = useContext(AppContext);

  useLayoutEffect(() => {
    if (!hasCookie(CONFIGS.OPERATION_IS_READY_COOKIE_NAME)) {
      setCookie(CONFIGS.OPERATION_IS_READY_COOKIE_NAME, 'true', 365);
    }
    setTimeout(() => {
      setStep(StepsEnum.KILL_SWITCH);
    }, 5000);
  }, [setStep]);

  return (
    <StyledPrepareAccountWrapper className={className}>
      <StyledButtonWrapper size={12.8}>
        <StyledButton>
          <TwitterIcon width={64} height={64} />
        </StyledButton>
        <StyledSignal size={24} />
      </StyledButtonWrapper>
      <StyledTitle>{MESSAGES.PREPARE_CREDENTIALS}</StyledTitle>
    </StyledPrepareAccountWrapper>
  );
};

export default Login;
