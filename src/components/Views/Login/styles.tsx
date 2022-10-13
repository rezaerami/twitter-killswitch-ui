import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';
import Title from 'components/Common/Title';

export const StyledLoginWrapper = styled(ViewWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const StyledLoginButtonWrapper = styled(Circle)`
  background-color: var(--twitter);
`;

export const StyledLoginButton = styled.span`
  display: inline-block;
  color: var(--white);
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  color: var(--twitter);
`;
