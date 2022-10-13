import React, { useContext, useEffect, useRef, useState } from 'react';

import NukeIcon from 'resources/icons/NukeIcon';
import MESSAGES from 'constants/messages';
import { AppContext } from 'components/App/context';
import { StepsEnum } from 'components/App/types';

import {
  StyledKillSwitchButton,
  StyledKillSwitchButtonWrapper,
  StyledKillSwitchWrapper,
  StyledTitle,
  StyledLockScreen,
  StyledButton,
  StyledProgress,
  StyledOfflineLockScreen,
} from './styles';
import ENDPOINTS from 'constants/endpoints';
import useIsOnline from 'hooks/useIsOnline';
import { deleteCookie, hasCookie, setCookie } from 'utils/cookieUtils';
import CONFIGS from 'constants/configs';

export interface KillSwitchProps {
  className?: string;
}
const KillSwitch: React.FC<KillSwitchProps> = ({
  className = '',
}: KillSwitchProps) => {
  const { setStep } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [operationCompleted, setOperationCompleted] = useState(false);
  const timeoutRef: any = useRef();
  const { isOnline } = useIsOnline();

  const undoableTill = 4 * 1000; //  4 seconds

  useEffect(() => {
    if (operationCompleted) {
      handleQueueRequest();
    }
  }, [operationCompleted]);

  useEffect(() => {
    if (isOnline && hasCookie(CONFIGS.REQUEST_QUEUE_COOKIE_NAME)) {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        handleKillAccount();
        deleteCookie(CONFIGS.REQUEST_QUEUE_COOKIE_NAME);
      }, undoableTill);
    }
  }, [isOnline]);

  const handleStartOperation = (): void => {
    setLoading(true);
    timeoutRef.current = setTimeout(() => {
      setOperationCompleted(true);
    }, undoableTill);
  };
  const handleCancelOperation = (): void => {
    setLoading(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = undefined;
  };

  const handleQueueRequest = (): void => {
    if (isOnline) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      handleKillAccount();
    } else {
      setCookie(CONFIGS.REQUEST_QUEUE_COOKIE_NAME, 'true');
      setLoading(false);
    }
  };

  const handleKillAccount = async (): Promise<void> => {
    try {
      await fetch(ENDPOINTS.TWITTER.KILL, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setStep(StepsEnum.OUTRO);
    } catch (e) {
      console.error(e);
      setOperationCompleted(false);
      setLoading(false);
    }
  };

  return (
    <>
      <StyledKillSwitchWrapper className={className}>
        <StyledKillSwitchButtonWrapper
          className={loading ? 'shake' : ''}
          size={12.8}
          onClick={handleStartOperation}
        >
          <StyledKillSwitchButton>
            <NukeIcon width={96} height={96} />
          </StyledKillSwitchButton>
        </StyledKillSwitchButtonWrapper>
        <StyledTitle>{MESSAGES.KILL_ACCOUNT}</StyledTitle>
      </StyledKillSwitchWrapper>
      {loading && (
        <StyledLockScreen duration={undoableTill}>
          <StyledButton onClick={handleCancelOperation}>
            {MESSAGES.CANCEL}
          </StyledButton>
          <StyledProgress duration={undoableTill} />
        </StyledLockScreen>
      )}
      {hasCookie(CONFIGS.REQUEST_QUEUE_COOKIE_NAME) && (
        <StyledOfflineLockScreen>
          <span>{MESSAGES.OFFLINE}</span>
        </StyledOfflineLockScreen>
      )}
    </>
  );
};

export default KillSwitch;
