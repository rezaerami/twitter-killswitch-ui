import React, { useContext, useLayoutEffect } from 'react';

import useTranslate from "hooks/useTranslate";
import { AppContext } from 'components/App/context';
import { StepsEnum } from 'components/App/types';

import { StyledOutroWrapper, StyledSection } from './styles';

export interface OutroProps {
  className?: string;
}
const Outro: React.FC<OutroProps> = ({ className }: OutroProps) => {
  const { setStep } = useContext(AppContext);
    const { MESSAGES, translate } = useTranslate();

  useLayoutEffect(() => {
    setTimeout(() => setStep(StepsEnum.FREEZE), 5000);
  });

  return (
    <StyledOutroWrapper className={className}>
      <StyledSection>
        <span>{translate(MESSAGES.FOR_WOMEN)}</span>
      </StyledSection>
      <StyledSection>
        <span>{translate(MESSAGES.FOR_LIFE)}</span>
      </StyledSection>
      <StyledSection>
        <span>{translate(MESSAGES.FOR_LIBERTY)}</span>
      </StyledSection>
    </StyledOutroWrapper>
  );
};

export default Outro;
