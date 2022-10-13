import styled from 'styled-components';
import ViewWrapper from 'components/Common/ViewWrapper';
import Circle from 'components/Common/Circle';
import Button from 'components/Common/Button';

export const StyledIntroWrapper = styled(ViewWrapper)`
  background-color: var(--black);
`;

export const StyledIntroButtonWrapper = styled(Circle)`
  background-color: var(--twitter);
`;

export const StyledIntroButton = styled.span`
  display: inline-block;
  color: var(--white);
  flex-direction: column;
`;

export const StyledDescription = styled.p`
  color: var(--white);
  font-size: 1.8rem;
  margin-top: 4rem;
  display: none;
  height: 18rem;
  align-items: center;
  line-height: 1.6;
  &.active {
    display: flex;
    animation: fade-in 3000ms;
  }
`;

export const StyledNextButton = styled(Button)``;

export const StyledStartButton = styled(Button)`
  color: var(--twitter);
`;
