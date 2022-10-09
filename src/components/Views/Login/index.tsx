import React from 'react';

import TwitterIcon from 'resources/icons/TwitterIcon';
import ENDPOINTS from 'constants/endpoints';
import MESSAGES from 'constants/messages';

import {
  StyledLoginWrapper,
  StyledLoginButton,
  StyledLoginButtonWrapper,
  StyledTitle,
} from './styles';

export interface LoginProps {
  className?: string;
}
const Login: React.FC<LoginProps> = ({
  className,
}: LoginProps) => (
  <StyledLoginWrapper className={className}>
    <a href={ENDPOINTS.TWITTER.LOGIN}>
      <StyledLoginButtonWrapper size={12.8}>
        <StyledLoginButton>
          <TwitterIcon width={64} height={64} />
        </StyledLoginButton>
      </StyledLoginButtonWrapper>
    </a>
    <StyledTitle>{MESSAGES.LOGIN_VIA_TWITTER}</StyledTitle>
  </StyledLoginWrapper>
);

export default Login;
