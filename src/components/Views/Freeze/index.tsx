import React, { useContext, useEffect } from 'react';

import MESSAGES from 'constants/messages';
import CONFIGS from 'constants/configs';
import { deleteCookie, hasCookie, setCookie } from 'utils/cookieUtils';
import { AppContext } from 'components/App/context';

import { StyledFreezeWrapper, StyledTitle } from './styles';

export interface OutroProps {
  className?: string;
}
const Freeze: React.FC<OutroProps> = ({ className }: OutroProps) => {
  const { setFreeze } = useContext(AppContext);
  useEffect(() => {
    setTimeout(() => {
      handleCompleteOperation();
    }, 7000);
  }, [setFreeze]);

  const handleCompleteOperation = (): void => {
    setFreeze(true);
    deleteCookie(CONFIGS.TOKEN_COOKIE_NAME);
    deleteCookie(CONFIGS.OPERATION_IS_READY_COOKIE_NAME);
    setCookie(CONFIGS.OPERATION_COMPLETED_COOKIE_NAME, 'true', 365);
  };

  return (
    <StyledFreezeWrapper className={className}>
      {!hasCookie(CONFIGS.OPERATION_COMPLETED_COOKIE_NAME) && (
        <StyledTitle>{MESSAGES.STAY_SAFE}</StyledTitle>
      )}
    </StyledFreezeWrapper>
  );
};

export default Freeze;
