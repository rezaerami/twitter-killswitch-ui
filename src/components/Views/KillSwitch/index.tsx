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
} from './styles';

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
  const undoableTill = 4 * 1000; //  4 seconds

  useEffect(() => {
    if (operationCompleted) {
      handleKillAccount();
    }
  }, [operationCompleted]);

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

  const handleKillAccount = (): void => {
    console.log('operationCompleted', operationCompleted);
    setStep(StepsEnum.OUTRO);
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
        <StyledTitle>
          {MESSAGES.KILL_ACCOUNT}
        </StyledTitle>
      </StyledKillSwitchWrapper>
      {loading && (
        <StyledLockScreen duration={undoableTill}>
          <StyledButton onClick={handleCancelOperation}>
            {MESSAGES.CANCEL}
          </StyledButton>
          <StyledProgress duration={undoableTill} />
        </StyledLockScreen>
      )}
    </>
  );
};

export default KillSwitch;
