import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';
import Title from 'components/Common/Title';
import Signal from 'components/Common/Signal';

export const StyledPrepareAccountWrapper = styled(ViewWrapper)`
  background-color: var(--twitter);
`;

export const StyledButtonWrapper = styled(Circle)`
  background-color: var(--white);
  position: relative;
  overflow: unset;
`;

export const StyledButton = styled.span`
  display: inline-block;
  color: var(--twitter);
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  color: var(--white);
`;

export const StyledSignal = styled(Signal)`
  position: absolute;
`;
