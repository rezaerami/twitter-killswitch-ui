import React from 'react';

import MESSAGES from 'constants/messages';

import { StyledFreezWrapper, StyledTitle } from './styles';

export interface OutroProps {
  className?: string;
}
const Outro: React.JSXElementConstructor<OutroProps> = ({
  className,
}: OutroProps) => (
  <StyledFreezWrapper className={className}>
    <StyledTitle>{MESSAGES.STAY_SAFE}</StyledTitle>
  </StyledFreezWrapper>
);

export default Outro;
