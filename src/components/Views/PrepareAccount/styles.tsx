import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';
import Title from 'components/Common/Title';

export const StyledPrepareAccountWrapper = styled(ViewWrapper)`
  background-color: var(--twitter);
`;

export const StyledButtonWrapper = styled(Circle)`
  background-color: var(--white);
`;

export const StyledButton = styled.span`
  display: inline-block;
  color: var(--twitter);
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  color: var(--white);
`;
