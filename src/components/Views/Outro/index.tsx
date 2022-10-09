import React, { useContext, useLayoutEffect } from 'react';

import MESSAGES from 'constants/messages';
import { AppContext } from 'components/App/context';

import { StyledOutroWrapper, StyledSection } from './styles';
import { StepsEnum } from '../../App/types';

export interface OutroProps {
  className?: string;
}
const Outro: React.FC<OutroProps> = ({ className }: OutroProps) => {
  const { setStep } = useContext(AppContext);

  useLayoutEffect(() => {
    setTimeout(() => setStep(StepsEnum.FREEZE), 5000);
  });

  return (
    <StyledOutroWrapper className={className}>
      <StyledSection>
        <span>{MESSAGES.FOR_WOMEN}</span>
      </StyledSection>
      <StyledSection>
        <span>{MESSAGES.FOR_LIFE}</span>
      </StyledSection>
      <StyledSection>
        <span>{MESSAGES.FOR_LIBERTY}</span>
      </StyledSection>
    </StyledOutroWrapper>
  );
};

export default Outro;
