import React from 'react';

import MESSAGES from 'constants/messages';

import {
  StyledOutroWrapper,
  StyledSection,
} from './styles';

export interface OutroProps {
  className?: string;
}
const Outro: React.JSXElementConstructor<OutroProps> = ({
  className,
}: OutroProps) => (
  <StyledOutroWrapper className={className}>
    <StyledSection>{MESSAGES.FOR_WOMEN}</StyledSection>
    <StyledSection>{MESSAGES.FOR_LIFE}</StyledSection>
    <StyledSection>{MESSAGES.FOR_LIBERTY}</StyledSection>
  </StyledOutroWrapper>
);

export default Outro;
