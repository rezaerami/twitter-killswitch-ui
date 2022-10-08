import React from 'react';

import TwitterIcon from 'resources/icons/TwitterIcon';
import MESSAGES from 'constants/messages';

import {
  StyledPrepareAccountWrapper,
  StyledButton,
  StyledButtonWrapper,
  StyledTitle,
} from './styles';

export interface PrepareAccount {
  className?: string;
}
const Login: React.JSXElementConstructor<PrepareAccount> = ({
  className,
}: PrepareAccount) => (
  <StyledPrepareAccountWrapper className={className}>
    <StyledButtonWrapper size={12.8}>
      <StyledButton>
        <TwitterIcon width={64} height={64} />
      </StyledButton>
    </StyledButtonWrapper>
    <StyledTitle>{MESSAGES.PREPARE_CREDENTIALS}</StyledTitle>
  </StyledPrepareAccountWrapper>
);

export default Login;
